import { Directive, Renderer2, ElementRef, Input, HostListener, OnInit, OnDestroy } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Directive({
  selector: '[wpcTooltip]'
})
/*
  实现思路：
  tooltip主要实现三个功能点：
    1、tip的弹出和隐藏
    2、tip弹出的位置和内容自定义
    3、相关css实现

  第一条和第二条细分又分为以下几点
    1、鼠标悬浮，弹出tip
    2、鼠标移开，隐藏tip
    3、鼠标移到tip上，tip不隐藏
    4、鼠标移出tip，tip隐藏
    5、从目标元素的上下左右弹出tip
*/
export class WpcTooltipDirective implements OnInit, OnDestroy{

  private _tooltip: any;
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {
    // console.log(this.el.nativeElement);
    // console.log(this.placement);
    // console.log(this.TooltipContent)
  }

  @Input('tooltip') TooltipContent: string;
  @Input('placement') placement: string = 'top';
  // @Input()
  // get isOpen(): boolean {
  //   return this._tooltip.isShow;
  // }

  // set isOpen(value: boolean) {
  //   if (value) {
  //     this.showTip();
  //   } else {
  //     this.hideTip();
  //   }
  // }

  @HostListener('mouseenter', ['$event']) onmouseenter(ev: Event) {
    console.log(ev.target);
    console.log(this.el.nativeElement);
    this.showTip();
  }
  @HostListener('mouseleave', ['$event']) onmouseLeave(ev: Event) {
    console.log(ev.target);
    setTimeout(() => {
      this.hideTip();
    },0);
  }

  CreatTipEl() {
    this._tooltip = this.render.createElement("div");
    this._tooltip.className = 'tip-container';
    let arrow = this.render.createElement("div");
    arrow.className = 'tip-arrow '+this.placement;
    let content = this.render.createElement("div");
    content.className = 'tip-content '+this.placement;
    this.render.appendChild(this._tooltip, content);
    this.render.appendChild(this._tooltip, arrow);
    content.innerHTML = this.TooltipContent;
    this.render.appendChild(this.el.nativeElement, this._tooltip);
  }

  getElementPos(el) {
    let _x = 0, _y = 0;
      do {
         _x += el.offsetLeft;
          _y += el.offsetTop;
      } while (el = el.offsetParent);
      return { x: _x, y: _y };
  }

  protected showTip() {
    const parentEl = this.el.nativeElement;
    this.render.setStyle(parentEl, 'position', 'relative');
    this.render.setStyle(parentEl, 'left', '0');
    this.render.setStyle(parentEl, 'top', '0');
    console.log(this.placement);
    this.CreatTipEl();
  }
  protected hideTip() {
    const parentEl = this.el.nativeElement;
    this.render.setStyle(parentEl, 'position', 'static');
    this.render.removeChild(parentEl, this._tooltip);
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._tooltip = null;
  }

}
