import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewContainerRef, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import { slideDown, slideUp } from 'src/app/utils/toggle';

@Component({
  selector: 'app-wpc-menu',
  templateUrl: './wpc-menu.component.html',
  styleUrls: ['./wpc-menu.component.scss']
})
export class WpcMenuComponent implements OnInit, AfterViewInit {

  @Input() group;

  constructor(
      private render: Renderer2,
      private el: ElementRef
  ) {
  }

  ngOnInit() {
    // console.log(this.group);
  }

  getStep(pId) {
    console.log(pId);
    let nameClass = '';
    if (pId === 0) {
      nameClass = 'MenuName';
    } else {
      const len = pId.length;
      switch (len) {
        case 1:
          nameClass = 'secondMenuName'
          break;
        case 2:
          nameClass = 'thirdMenuName'
          break;
        case 3:
          nameClass = 'fourMenuName'
          break;
        default:
          break;
      }
    }
    return nameClass;
  }

  ngAfterViewInit() {
    this.render.listen(this.el.nativeElement, 'click', (e) => {
        e.stopPropagation();
        const checkbox = e.target;
        if (checkbox instanceof Object && checkbox.tagName === 'DIV') { 
            const siblings = checkbox.parentNode.children;
            const wrapperParent = checkbox.parentNode.parentNode;
            // console.log(wrapperParent.tagName);

            let num = 0;
            if (siblings[1].children) {
              num = siblings[1].children.length;
            }

            for (const item of siblings) {
                if (this.group.isOpen) {
                    // 使用封装方法，有缺陷：为ul添加overflow-y: hidden;处理了缺陷；还需要使用我自己的封装，动态调整ul高度
                    // slideUp(siblings[1], 300, this.group);

                    // 正常菜单是使用通过变更高度实现下拉，需要实时变更高度（包括外层父级的）
                    if (wrapperParent.tagName === 'LI') { 
                      // 当有多层次时，需要封装递归函数来查询需要变更高度的元素，传递给展开和折叠函数
                      this.slideUp(siblings[1], 300, 72*num, this.group, wrapperParent.parentNode);
                    } else {
                      this.slideUp(siblings[1], 300, 72*num, this.group);
                    }

                    if (this.group.hasChild) {
                        this.resetChildOpen(this.group.children);
                    }

                    break;
                } else {
                    // slideDown(siblings[1], 300, this.group);
                    
                    if (wrapperParent.tagName === 'LI') {
                      this.slideDown(siblings[1], 300, 72*num, this.group, wrapperParent.parentNode);
                    } else {
                      this.slideDown(siblings[1], 300, 72*num, this.group);
                    }

                    break;
                }
            }
        } else if (checkbox instanceof Object && checkbox.tagName === 'UL') {
          console.log(this.group);
        }
    });
  }

  /**
   * el: 动画执行元素
   * time: 动画执行时间
   * liHeight：动画执行距离
   * falg: 调整变更变量
   * eLUL：父级需要变更元素
   * */ 
  // 关闭动画
  slideUp(el, time, liHeight, falg, eLUL?) {
    if (el.offsetHeight !== 0) {
      time = time || 500; // 执行总时间
      const timeSpeed = time / 50; // 速度
      let num = 1;

      let offsetHeight;
      if (eLUL) {
        offsetHeight = eLUL.offsetHeight;
      }
      // console.log(offsetHeight);

      const timer = setInterval(() => {
        liHeight -= timeSpeed;
        
        this.render.setStyle(el, 'height', `${liHeight}px`);
        if (offsetHeight) {
          this.render.setStyle(eLUL, 'height', `${offsetHeight - timeSpeed*num}px`);
        }
        num ++;
        
        if (liHeight <= 0) {
          falg.isOpen = !falg.isOpen;
          clearInterval(timer);
        }
      }, timeSpeed);
    }
  }

  // 下拉动画
  slideDown(el, time, liHeight, falg, eLUL?) {
    time = time || 500; // 执行总时间
    const timeSpeed = time / 50; // 速度
    let num = 0;
    falg.isOpen = !falg.isOpen;

    let offsetHeight;
    if (eLUL) {
      offsetHeight = eLUL.offsetHeight;
    }
    console.log(offsetHeight);
    
    const timer = setInterval(() => {
      num += timeSpeed;
      this.render.setStyle(el, 'height', `${num}px`);
      if (offsetHeight) {
        this.render.setStyle(eLUL, 'height', `${offsetHeight + num}px`);
      }
      if (num >= liHeight) {
        clearInterval(timer);
      }
    }, timeSpeed);
  }
  
  resetChildOpen(group) {
    group.forEach(e => {
      if (e.isOpen) {
        e.isOpen = false;
      }
      if (group.hasChild) {
        this.resetChildOpen(group.children);
      }
    });
  }

  changeArrow(el) {
    // const _o = el.querySelector('.MenuName').childNodes[0]; // js 获取不到before节点
    const _o = el.childNodes[0];
    console.log(_o);

    // this.creatDivBefore(el, el.childNodes[0].childNodes[0]);

    // const before = this.render.selectRootElement('.MenuName', true); 这种可以正常获取元素

    // const before = window.getComputedStyle(_o, '::before');
    // console.log(before);
    // const tf = before.getPropertyValue('transform');
    // before.removeProperty('transform');
    // window.getComputedStyle(_o, '::before').setProperty('transform', 'translateY(-50%) rotate: 0deg'); // 是只读，不可以设置
    // console.log(tf);

    // this.render.removeChild(_o, before);
    // _o.removeChild(before.childNodes[0]);
    // if (this.group.isOpen) {
    //   el.insertRule('.MenuName:before{transform: translateY(-50%) rotate: 0deg}', 0);
    // } else {
    //   el.
    //   el.insertRule('.MenuName:before{rotate: -90deg}', 0);
    // }
  //   this.render.setStyle(el, 'rotate', '-90deg');
  //   el::before {
  //     transform: translateY(-50%) rotate(-90deg);
  // }
  }

  creatDivBefore(el, text) {
    const div = this.render.createElement('div');
    const newtext = this.render.createText(text);
    this.render.appendChild(div, newtext);
    // this.render.setStyle(div.before(), '') 无法设置元素的before属性及样式
    this.render.appendChild(el, div);
  }
}
