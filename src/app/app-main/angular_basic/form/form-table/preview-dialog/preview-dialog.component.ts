import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent implements OnInit, OnChanges {

  @Input() imgs: Array<any>
  @Input() showIndex: number;
  @Input() showPreview: boolean;
  @Output() close = new EventEmitter<any>();
  constructor() { }

  get ImageUrl() {
    let url = '';
    if (this.imgs.length !== 0) {
      url = this.imgs[this.showIndex];
    }
    return url;
  };

  public style = {
    'visibility': 'visible' ,
    'max-width': 'none !important',
    'transform': 'none',
    'left': '0px',
    'top': '0px'
  }
  public transform = 0;
  public inDrag = false;

  // 存储拖动鼠标距离元素边界的宽高，再onmouseup时，通过此差值重新计算出定位的起点
  overStyle = {
    divX: 0,
    divY: 0,
  };

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  pageUp() {
    if (this.showIndex !== 0) {
      this.showIndex = this.showIndex - 1;
    }
  };
  pageDown() {
    if (this.showIndex !== this.imgs.length - 1) {
      this.showIndex = this.showIndex + 1;
    }
  };
  toZoom(val) {
    const perce = val === 1 ? 1.1 : 0.9;
    const imgTarget = document.getElementById('viewImg');
    const newWidth = imgTarget.offsetWidth * perce;
    const newHeight = imgTarget.offsetHeight * perce;
    // 获取left和top值为空，使用存css控制了
    // let DiffWidthVal = imgTarget.offsetWidth*(1-perce);
    // let DiffHeightVal = imgTarget.offsetHeight*(1-perce);
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    if (newWidth < window.innerWidth * 0.8 && newWidth > window.innerWidth * 0.4) {
      imgTarget.style.width = `${newWidth}px`;
    }
    // 注意如果一开始图片高度或宽度就大于判断的对应值是不会发生变化的
    if (newHeight < window.innerHeight * 0.6 && newHeight > window.innerHeight * 0.3) {
      imgTarget.style.height = `${newHeight}px`;
    }
    // console.log(imgTarget.style.left.replace(/px/, ""));
    // console.log(imgTarget.style.top);
    // this.$nextTick(() => {
    //   console.log(imgTarget.style.top);
    //   imgTarget.style.left += DiffWidthVal / 2;
    //   imgTarget.style.top += DiffHeightVal / 2;
    // });
  };
  toRetato(flag) {
    const aaaa = _.cloneDeep(this.style);
    const oldTransform = this.transform;
    const ratio = flag === 1 ? 90 : -90;
    const newTransform = oldTransform + ratio;
    aaaa.transform = `rotate(${newTransform}deg)`;
    this.transform = newTransform;
    this.style = aaaa;
  };
  closeDialog() {
    this.close.emit(1);
    this.cloud();
  };
  cloud () {
    this.transform = 0;
    this.style =  {
      'visibility': 'visible' ,
      'max-width': 'none !important' ,
      'transform': 'none',
      'left': '0px',
      'top': '0px'
    };
  };
  getIcon(icon) {
    return "#icon-"+icon;
  };
  // 拖动开始函数
  testStart(event) {
    const imgTarget = document.getElementById('viewImg');
    const { ...zjSty } = this.overStyle;
    // 鼠标到img边界的宽高
    zjSty.divX = event.clientX - imgTarget.offsetLeft;
    zjSty.divY = event.clientY - imgTarget.offsetTop;
    this.overStyle = zjSty;
    this.inDrag = true;
  };
  // 拖动中的函数
  test(event) {
    const imgTarget = document.getElementById('viewImg');
    imgTarget.style.position = 'absolute';
    const { ...zjSty } = this.overStyle;
    // 移动后的鼠标位置再减去差值，变成新定位的起点，（注意也可以使用onmousemove事件，就是鼠标移动元素，之前Hbuilder中是从浏览器之外向页面拖动文件，用drag）
    if ((event.clientX > 0) && (event.clientY > 0)) {
      imgTarget.style.left = `${event.clientX - zjSty.divX}px`;
      imgTarget.style.top = `${event.clientY - zjSty.divY}px`;
    } else {
      event.preventDefault();
    }
  };
  // 拖动结束的函数
  testEnd(event) {
    const { ...oldSty } = this.style;
    const imgTarget = document.getElementById('viewImg');
    let { ...zjSty } = this.overStyle;
    if ((event.clientX > 0) && (event.clientY > 0)) {
      oldSty.left = `${event.clientX - zjSty.divX}px`;
      oldSty.top = `${event.clientY - zjSty.divY}px`;
    } else {
      // ff 兼容
      oldSty.left = `${event.screenX - zjSty.divX - 62}px`;
      oldSty.top= `${event.screenY - zjSty.divY - 112}px`;
      event.preventDefault();
    }
    imgTarget.style.left = oldSty.left;
    imgTarget.style.top = oldSty.top;
    imgTarget.style.position = `absolute`;
    this.style = oldSty;
    zjSty = {
      divX: 0,
      divY: 0,
    };
    this.inDrag = false;
  }

}
