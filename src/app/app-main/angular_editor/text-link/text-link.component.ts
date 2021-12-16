import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss'],
  encapsulation: ViewEncapsulation.None // 看看是不是对content: attr的作用
})
export class TextLinkComponent implements OnInit, AfterViewInit, OnDestroy {

  private pattern = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/; // 校验一个正确的url
  // selected related variables
  public selectTxt = '';
  public cursorInLink = false; // 插入光标是否存在变量
  public linkInselectNodes = false; // 是否选中中有link
  private nodeAllSelect = false; // 是否选中了所有节点
  public selectNodes = []; // *** more important, 如果选中单一元素，则数组项为node节点的索引，如果选择多个元素，则数组项为该node节点在整个list里面的索引
  private direction: string; // 选取方向
  private startNodeOffest: number;
  private endNodeOffest: number;

  public linkText = ''; // popup href
  public bindData = '';
  public row: number;
  public opts: any = {
    row: 1,
    maxLength: 2000,
    id: '',
    autoResize: false,
    placeholder: '',
    expandNum: null,
    focusEvent: false
  };
  public isVisible = false;
  public isPaste = false;

  @Input() data: any;
  @Input()
  public set option(val: any) {
      if (val) {
          this.opts = Object.assign(this.opts, val);
          this.row = this.opts.row;
      }
  }
  @Output() blurEmitter = new EventEmitter<any>();
  @Output() focusEmitter = new EventEmitter<any>();

  private $keyup: Subscription;

  public get linkTextDis(): boolean {
    return this.linkText !== '' && !this.pattern.test(this.linkText);
  }

  public get addLinkbtnDis(): boolean {
      return this.selectTxt.trim() === '' && !this.cursorInLink;
  }

  public get removeLinkbtnDis(): boolean {
      return !this.cursorInLink && !this.linkInselectNodes;
  }

  @ViewChild('editP') editP: ElementRef<any>;

  constructor() {
    this.row = this.opts.row;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.$keyup = fromEvent(this.editP.nativeElement, 'keyup')
        .pipe(debounceTime(300))
        .subscribe((e: any) => {
                  this.handleSelection(e);
                  if (!this.isPaste) {
                      this.syncData('keyup');
                  } else {
                      this.isPaste = false;
                  }
          });
  }

  ngOnDestroy(): void {
    if (this.$keyup) {
        this.$keyup.unsubscribe();
        this.$keyup = null;
    }
  }

  // -------------------------------------------- handle edit div event ------------------------------------------------

  focus(ev) {
    ev.stopPropagation();
    if (this.opts.expandNum) {
        this.row = this.opts.expandNum; // fouce 输入元素框变大
    }
    if (this.opts.focusEvent) {
        this.focusEmitter.emit();
    }
    this.handleSelection = this.handleSelection.bind(this);
    window.addEventListener('mouseup', this.handleSelection, false);
  }

  outEmitter() {
    setTimeout(() => {
        if (!this.isVisible) {
            this.clearVariables();
            this.row = this.opts.row;
            const d = this.editP.nativeElement.innerHTML;
            this.bindData = d.replace(/^(?:[\n\r]*)|(?:[\n\r]*)$/g, '').trim(); // 去掉回车换行
            this.blurEmitter.emit(this.bindData);
        }
    }, 200);
    window.removeEventListener('mouseup', this.handleSelection, false);
  }

  paste(ev) {
    // console.log(ev);
    if (ev) this.isPaste = true;
    let str = this.editP.nativeElement.innerHTML;
    if (str.endsWith('<div><br></div>')) {
        str = str.replace('<div><br></div>', '');
    }
    this.bindData = str;
  }

  // -------------------------------------------- handle edit div event end ------------------------------------------------

  // -------------------------------------------- handle selection start -------------------------------------------------------
  handleSelection(e) {
    this.clearVariables();
    // console.log(window.getSelection());
    this.selectTxt = window.getSelection().toString();
    const { nativeElement: el } = this.editP;
    const childNodes = Array.from(el.childNodes);
    const {
        anchorOffset,
        focusOffset,
        isCollapsed,
    } = window.getSelection();
    let {
        anchorNode: startNode,
        focusNode: endNode,
    } = window.getSelection();

    const sNodeName = startNode.parentNode.nodeName;
    const eNodeName = endNode.parentNode.nodeName;
    if (sNodeName === 'A') {
        startNode = startNode.parentNode;
    }
    if (eNodeName === 'A') {
        endNode = endNode.parentNode;
    }
    // console.log(endNode.nodeType);
    if (isCollapsed) { // 只是光标插入
         // 当前光标上是否为element元素（比如a标签），或是 node节点（text文本）
         if (sNodeName === 'A') {
            this.cursorInLink = true;
            this.selectNodes.push(startNode);
        }
    } else { // 有选中的情况
        if (this.selectTxt.trim() === '') { return; }
        let direct; // lr 从左向右选中，rl 从右向左选中，用于递归节点时，判断使用属性nextSibling或previousSibling
        if (startNode === endNode) { // 选中元素没有跨域node节点,完全是同一个node节点
            // 如果相等会被外层 isCollapsed 判断住，表明没有选中任何文本
            direct = anchorOffset < focusOffset ? 'lr' : 'rl';
            /**
             * 选中的是a标签，此时需要的是修改link
             * 选中的是文本节点，此时需要添加link，添加link的方式：在整个node节点前插入
             */
            if (sNodeName !== 'A') {
                const nodeValue = startNode.nodeValue;
                this.nodeAllSelect = nodeValue.trim().length <= Math.abs(focusOffset - anchorOffset)
                // if (direct === 'lr') { 
                //     this.nodeAllSelect = nodeValue.trim().length <= focusOffset - anchorOffset;
                // } else {
                //     this.nodeAllSelect = nodeValue.trim().length <= anchorOffset - focusOffset;
                // }
            } else {
                this.linkInselectNodes = true;
            }
            this.selectNodes.push(startNode);
        } else { // 选中元素包含多个节点 （核心）
            let startIndex = childNodes.findIndex(e => e === startNode);
            let endtIndex = childNodes.findIndex(e => e === endNode);
            direct = startIndex > endtIndex ? 'rl' : 'lr';
            let SiblingAttrName = direct === 'lr' ? 'nextSibling' : 'previousSibling';
            this.selectNodes.push(startIndex);
            while (startNode) {
                if (startNode.nodeName === 'A') {
                    this.linkInselectNodes = true;
                }
                if (startNode === endNode) {
                    break;
                } else {
                    startNode = startNode[SiblingAttrName];
                    this.selectNodes.push(direct === 'lr' ? ++startIndex : --startIndex);
                }
            }
        }
        this.direction = direct;
        this.startNodeOffest = anchorOffset;
        this.endNodeOffest = focusOffset;
    }
  }

  clearVariables() {
    this.selectNodes = [];
    this.selectTxt = this.direction = '';
    this.cursorInLink = this.nodeAllSelect = this.linkInselectNodes = false;
    this.startNodeOffest = this.endNodeOffest = null;
  }

  removeSingleLink(el) {
    const node = this.selectNodes[0];
    el.insertBefore(this.createElem(node.innerHTML, 'text'), node);
    el.removeChild(node);
  }
  
  removeLink() {
    const { nativeElement: el } = this.editP;
    if (this.cursorInLink) {
        this.removeSingleLink(el);
    } else {
        if (this.selectNodes.length === 1) {
            this.removeSingleLink(el);
        } else if (this.selectNodes.length > 1) {
            const removeArr = [];
            const childNodes: any = Array.from(el.childNodes);
            const sortSelectNodes = _.sortBy(this.selectNodes, e => parseInt(e, 10));
            let selectNodesText = '';
            for (const idx of sortSelectNodes) {
                for (let i = 0; i < childNodes.length; i++) {
                    if (i === idx) {
                        selectNodesText += childNodes[i].innerText || childNodes[i].nodeValue;
                        removeArr.push(childNodes[i]);
                        break;
                    }
                }
            }
            el.insertBefore(this.createElem(selectNodesText, 'text'), childNodes[this.selectNodes[0]]);
            removeArr.forEach(e => {
                el.removeChild(e);
            });
        }
    }
    this.syncData();
  }

  handleCancel() {
      this.isVisible = false;
      this.linkText = '';
      this.clearVariables();
      this.backEndFocus();
  }
  backEndFocus() {
    setTimeout(() => {
        const el = this.editP.nativeElement;
        const sel = window.getSelection();
        sel.collapse(el, 1); // 设置光标位置
        el.focus();
    });
  }
  /**
     * 如果改node节点所有的text都被选中，则整体替换改text node 为 a 标签
     * 如果只选中node节点中的部分text，则需要对改node节点进行切割处理，text => text - a - text
     */
  handleOk() {
    const { selectNodes, direction, startNodeOffest, endNodeOffest, nodeAllSelect } = this;
    const { nativeElement: el } = this.editP;
    const childNodes: any = Array.from(el.childNodes);

    if (this.cursorInLink) { // 只是光标插入
        this.selectNodes[0].href = this.linkText;
    } else {
        if (this.selectNodes.length === 1) {
            const node = this.selectNodes[0];
            if (node.nodeName === 'A') {
                this.selectNodes[0].href = this.linkText;
            } else {
                if (nodeAllSelect) { // 替换选中的整个node节点
                    el.insertBefore(this.createElem(this.selectTxt, 'A'), node);
                    el.removeChild(node);
                } else {
                    // 做分割处理，把分割好的node节点按顺序插入在old node之前
                    const nodeValue = node.nodeValue;
                    const startNodeText = nodeValue.substring(0, direction === 'lr' ? startNodeOffest : endNodeOffest);
                    const endNodeText = nodeValue.substring(direction === 'lr' ? endNodeOffest : startNodeOffest, nodeValue.length);
                    el.insertBefore(this.createElem(startNodeText, 'text'), node);
                    el.insertBefore(this.createElem(this.selectTxt, 'A'), node);
                    el.insertBefore(this.createElem(endNodeText, 'text'), node);
                    el.removeChild(node);
                }
            }
        } else if (this.selectNodes.length > 1) {
            const minIndex = _.min(selectNodes);
            const maxIndex = _.max(selectNodes);
            let sNode = childNodes[minIndex];
            let eNode = childNodes[maxIndex];
            if (childNodes[minIndex].nodeName === 'A') {
                sNode = childNodes[minIndex].childNodes[0];
            }
            if (childNodes[maxIndex].nodeName === 'A') {
                eNode = childNodes[maxIndex].childNodes[0];
            }
            if (direction === 'lr') {
                sNode.nodeValue = sNode.nodeValue.substring(0, startNodeOffest);
                eNode.nodeValue = eNode.nodeValue.substring(endNodeOffest, eNode.nodeValue.length);
            } else {
                sNode.nodeValue = sNode.nodeValue.substring(0, endNodeOffest);
                eNode.nodeValue = eNode.nodeValue.substring(startNodeOffest, eNode.nodeValue.length);
            }
            // 操作节点之前
            const nodeNeedRemoveArr = [];
            childNodes.forEach((e, idx) => {
                if (idx === minIndex) {
                    // 防止出现空标签，如果选中的元素中，头尾元素的文本全被选中，则头尾标签页要替换掉
                    if (sNode.nodeValue === '') {
                        nodeNeedRemoveArr.push(e);
                    }
                } else if (idx > minIndex && idx < maxIndex) {
                    nodeNeedRemoveArr.push(e);
                } else if (idx === maxIndex) {
                    if (eNode.nodeValue === '') {
                        nodeNeedRemoveArr.push(e);
                    }
                }
            });
            // start operate nodes
            el.insertBefore(this.createElem(this.selectTxt, 'A'), childNodes[minIndex + 1]);
            nodeNeedRemoveArr.forEach(e => {
                el.removeChild(e);
            });
        }
    }
    this.handleCancel();
    this.syncData();
  }
  createElem(innerContent: string, type: string): any {
    let a = null;
    switch (type) {
        case 'A':
            a = document.createElement('a');
            a.href = this.linkText;
            a.rel = 'noopener';
            a.target = '_blank';
            a.innerText = innerContent;
            break;
        case 'text':
        default:
            innerContent = innerContent.replace('&lt;', '<');
            innerContent = innerContent.replace('&gt;', '>');
            a = document.createTextNode(innerContent);
            break;
    }
    return a;
  }

  // -------------------------------------------- handle selection end-------------------------------------------------------

  syncData(flag?: string) {
    setTimeout(() => {
        let htm = this.editP.nativeElement.innerHTML;
        htm = htm.replace(/^(?:[\n\r]*)|(?:[\n\r]*)$/g, '').trim();
        if (flag !== 'keyup') { // 键盘输入时如果绑定的数据发生变化，会导致dom重新渲染，光标聚焦的位置会发生变化，避免之
            this.bindData = htm;
            this.blurEmitter.emit(this.bindData);
        } else {
            this.blurEmitter.emit(htm);
        }
    });
  }
}
