import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebouncEvent]'
})
export class DebouncEventDirective {

  @Input() debouncetime = 500;

  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject<any>(); // 创建 Subject 主题(被观察者) 对象 （Suject继承于Observable ）
  // 1、Subject 既是 Observable 对象，又是 Observer 对象
  // 2、当有新消息时，Subject 会对内部的 observers 列表进行组播 (multicast)
  private subscription: Subscription; // 订阅了Observable，你会得到一个Subscription
  constructor() { }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      debounceTime(this.debouncetime)
    ).subscribe((e) => {
      //步骤2、 console.log(e);
      this.debounceClick.emit(e);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    //步骤1、 console.log(event);
    event.preventDefault();
    event.stopPropagation();
    console.log('Click from Host Element!');
    this.clicks.next(event);
  }

}


// 单独封装的指令Keyup去抖，使用NgModule对外开发出去
@Directive({
  selector: '[appDebounceKeyupEnter]'
})
// tslint:disable-next-line: directive-class-suffix
export class DebounceKeyupEnter implements OnInit, OnDestroy {

  @Input() debounceTime = 500;

  @Output() debounceEnter = new EventEmitter();

  private subject = new Subject<any>();
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.subject.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => {
      this.debounceEnter.emit(e);
      e.target.blur();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('keyup.enter', ['$event']) clickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.subject.next(e);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [DebouncEventDirective, DebounceKeyupEnter],
  exports: [DebouncEventDirective, DebounceKeyupEnter]
})
export class DebounceClickModuel {}
