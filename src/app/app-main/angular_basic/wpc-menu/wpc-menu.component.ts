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
              for (const item of siblings) {
                  if (this.group.isOpen) {
                      slideUp(siblings[1], 300);
                      setTimeout(() => {
                        this.group.isOpen = !this.group.isOpen;
                        // this.changeArrow(checkbox.parentNode);
                        if (this.group.hasChild) {
                          this.resetChildOpen(this.group.children);
                        }
                      }, 2000);
                      break;
                      // this.render.setStyle(item, 'display', 'none');
                  } else {
                      this.group.isOpen = !this.group.isOpen;
                      // this.changeArrow(checkbox.parentNode);
                      // this.render.setStyle(item, 'display', 'block');
                      slideDown(siblings[1], 300);
                      break;
                  }
              }
          } else if (checkbox instanceof Object && checkbox.tagName === 'UL') {
            console.log(this.group);
          }
      });
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
