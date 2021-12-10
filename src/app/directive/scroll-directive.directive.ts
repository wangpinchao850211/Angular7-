import { Directive, HostListener, Input, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollDirective]'
})
export class ScrollDirectiveDirective {

  private _renderer: Renderer2;
  private rootDom: ElementRef;
  @Input('scrollTarget') scrollTarget: any;
  @Output() changeHeight : EventEmitter<Object> = new EventEmitter<Object>();

  // @HostListener('window:scroll', ['$event'])
  // onScroll = ($event) => { 一直监听不到，应使用下面写法
  //   console.log($event);
  //   //客户端高度
  //   var clientH = document.documentElement.clientHeight;
  //   //body高度
  //   var bodyH = document.body.clientHeight;

  //   //滚动的高度
  //   var scrollTop = document.documentElement.scrollTop;
  //   console.log(bodyH)
  // }
  @HostListener('scroll', ['$event'])
  onscroll(event: any) {
    // console.log(event);
  }
  @HostListener('mousewheel', ['$event'])
  onmousewheel(event: any) {
    console.log(event.target.scrollHeight);
    if (event.target.scrollHeight > 0) {
      // console.log(event.target); // 无法找到滚动条存在的元素
      // console.log(event.target); // 无法找到滚动条存在的元素
this._renderer.addClass(this.rootDom.nativeElement, 'wpc'); // class添加上去了
      // 调用dom方法
      this.changeDom();
    }
  }
  constructor(
    elem: ElementRef, // 引入的是指令使用的dom元素
    renderer: Renderer2
  ) {
    this._renderer = renderer;
    this.rootDom = elem; // 这个注入进来的需要拿变量接一下
  }

  ngOnInit() {
    // 这两个一样
    // console.log(this.scrollTarget); // 使用@Input传入
    // console.log(this.rootDom.nativeElement); // 使用指令传入
  }

  changeDom() {
    const el = <HTMLElement>document.getElementsByClassName('wpc')[0];
    console.log(el.scrollTop);
    // const scrollel = <HTMLElement>document.querySelector('.wpc::-webkit-scrollbar'); // 貌似获取不到滚动条，因为不是元素，只是伪类(可以考虑使用js设置伪类样式) 最后使用scss mixin 实现了，详见iCompliance项目
    // console.log(scrollel);
    if (el.scrollTop > 1000) {
      console.log('滚动太大');
      this.changeHeight.emit(true); // 当滚动太大把页面调低，实现去掉滚动条
      el.scrollTop = 0;
    }
  }

}
