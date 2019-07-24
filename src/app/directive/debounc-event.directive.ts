import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebouncEvent]'
})
export class DebouncEventDirective {

  @Input() debouncetime = 500;

  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject<any>(); // 创建 Subject 主题(被观察者) 对象 （Suject继承于Observable ）(它允许将值多播给多个观察者,Subjects 是将任意 Observable 执行共享给多个观察者的唯一方式。还有一些特殊类型的 Subject：BehaviorSubject、ReplaySubject 和 AsyncSubject。) 
  // 1、Subject 既是 Observable 对象，又是 Observer 对象
  // 2、当有新消息时，Subject 会对内部的 observers 列表进行组播 (multicast)
  // 3、BehaviorSubject：它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。BehaviorSubjects 适合用来表示“随时间推移的值”。举例来说，生日的流是一个 Subject，但年龄的流应该是一个 BehaviorSubject 。
  // ReplaySubject：ReplaySubject 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。ReplaySubject 记录 Observable 执行中的多个值并将其回放给新的订阅者。new Rx.ReplaySubject(3); // 为新的订阅者缓冲3个值。new Rx.ReplaySubject(100, 500 /* windowTime */);
  // AsyncSubject 是另一个 Subject 变体，只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。
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
