import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs'; // 引入事件，可使用subscribe

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  private listening: boolean = false;
  private globalClick: any;
  @Output() clickOutside : EventEmitter<Object> = new EventEmitter<Object>();
  constructor(
    private _elRef: ElementRef // 注入ref
  ) {
    this.listening = false;
  }

  ngOnInit() {
    this.globalClick = 
        fromEvent(document, 'click').subscribe((event: MouseEvent) => {
            this.listening = true;
            this.onGlobalClick(event);
        });
  }
  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }
  onGlobalClick(event: MouseEvent) {
    console.log(event);
    if (event instanceof MouseEvent && this.listening === true) {
      console.log(this._elRef.nativeElement); // 永远返回得是使用指令得根标签
      console.log(event.target); // 返回得是点击标签
      // 通过以上两项直接可以判断父子关系：精简之后的方法
      console.log(this._elRef.nativeElement.contains(event.target));
      if (this._elRef.nativeElement.contains(event.target)) {
          this.clickOutside.emit({
              target: (event.target || null),
              value: true
          });
      } else {
        this.clickOutside.emit({
            target: (event.target || null),
            value: false
        });
      }
      // 下面是老方法，有瑕疵
      // if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
      //     this.clickOutside.emit({
      //         target: (event.target || null),
      //         value: false
      //     });
      // } else {
      //     this.clickOutside.emit({
      //         target: (event.target || null),
      //         value: true
      //     });
      // }
    }   
  }
  isDescendant(parent: any , child: any) {
      let node = child;
      while (node !== null) {
          if (node === parent) {
              return true;
          } else {
              node = node.parentNode;
          }
      }
      return false;
  }

}
