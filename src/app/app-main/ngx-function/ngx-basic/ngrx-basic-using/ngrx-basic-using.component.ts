import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, Subject, throwError, Subscriber, Subscription, BehaviorSubject, forkJoin, of, from, Observable } from 'rxjs';
import { switchMap, debounceTime, throttleTime, distinctUntilChanged, map, filter, catchError, mergeMap, delay, take, takeUntil, pluck, pairwise, distinct, scan } from 'rxjs/operators';
// 操作符分为实例操作符（Observable 实例上的方法，方法内部使用this）和静态操作符（内部不使用this），常见的静态操作符如创建操作符Rx.Observable.interval(1000 /* 毫秒数 */);
import * as Rx from 'rxjs';
// Rx.of(1,2,3) 直接可使用
// Rx.Observable

@Component({
  selector: 'app-ngrx-basic-using',
  templateUrl: './ngrx-basic-using.component.html',
  styleUrls: ['./ngrx-basic-using.component.scss']
})
export class NgrxBasicUsingComponent implements OnInit {

  public tabs = [
		{ id: 1, title: 'menu1', active: true },
		{ id: 2, title: 'menu2', active: false },
  ];
  get getResponseTab() {
    // 要实现对象属性的监听
    // console.log('ppppppppp');
    return this.tabs;
  }
  refreshNotif = new BehaviorSubject("");
  subscription: Subscription; // 订阅
  private searchTerms = new Subject<string>();
  public timerVal: number = 0;

  private count = 0;
  get sss() {
    return this.timerVal;
  }
  constructor() {
    // 概念: 观察者(Observer) 可观察对象(Observable) Subscription (订阅)
    // 观察者只是一组回调函数的集合
    // 可观察对象(Observable)是一个惰性推送集合,即:要调用Observable并看到这些值,需要订阅Observable:observable.subscribe()
    // 当你订阅了 Observable，你会得到一个 Subscription ，它表示进行中的执行。只要调用 unsubscribe()方法就可以取消执行。

    // 创建，转换成 observables

    // 来自一个或多个值
    Rx.of('foo', 'bar');

    // 来自数组
    const inputObservable = Rx.from(this.tabs);
    inputObservable.subscribe((v) => {
      console.log(v);
    });

    // 来自事件
    Rx.fromEvent(document.querySelector('button'), 'click');

    // 来自 Promise
    // Rx.fromPromise(fetch('/users')); 使用的fetch api
  }

  ngOnInit() {
    //1、 Create an observable from a counter
    const secondsCounter = interval(1000);
    const CounterSubscription = secondsCounter.subscribe((n) => {
      console.log(`It's been ${n} seconds since subscribing!`)
      if (n > 10) { // 没找到关闭方法，有一个timer可使用下(找到了方法,定义一个CounterSubscription订阅者, 方可调用取消执行的方法)
        CounterSubscription.unsubscribe();
      }
    });
    //2、 timer to use
    const _timer = timer(1000).subscribe(() => {
        this.timerVal = 1;
    });
    if (this.sss > 0) {
      _timer.unsubscribe();
    }
    //3、 Create an observable from an event
    const el = document.getElementById('my-element');
 
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(el, 'mousemove');
    
    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
    // 4、search
    this.searchTerms.pipe(
        filter(param => param.length > 3),
        debounceTime(300), // 流更新结束后 0.3s 才会通知观察者 
        distinctUntilChanged(), // 是说只有当值和上一次通知时的值不一样的时候才通知观察者 
        // switchMap(param => {console.log(param)})
        catchError((err) => {        
          // if (this.auth.IsTokenExpired(10)) {
          //   this.auth.login();
          // }
          if(err.status == 500) {          
            console.log(err.status);
          }
          return throwError(false);
        }),
        mergeMap((event: any) => {
          // if (event instanceof HttpResponse && event.status === 200) {
          //   return this.handleData(event)
          // }
          return of(event)
        })
    ).subscribe(result => {
        console.log(result);
    });

    //5、 Ro Web Main
    this.subscription = timer(300000, 300000).subscribe(() => {
      // if (this.authenticationService.IsTokenExpired(20)) {
      //   console.log("Renewing Token...")
      //   this.RenewToken();
      // }
      // else {
      //   console.log("Token Valid")
      // }
    });

    //一、 控制流
    // 输入 "hello world"
    var inputObservables = fromEvent(document.getElementById('flowControl'), 'change');

    // 过滤掉小于3个字符长度的目标值
    inputObservables.pipe(
      filter(event => `${event.target}`.length > 3),
      map(event => event.target)
      )
      .subscribe(value => console.log(value)); // 输入框的值

    // 延迟事件
    inputObservables.pipe(
      delay(200),
      map(event => event.target)
    ).subscribe(value => console.log(value)); // "h" -200ms-> "e" -200ms-> "l" ...

    // 每200ms只能通过一个事件
    inputObservables.pipe(
      throttleTime(200),
      map(event => event.target)
    ).subscribe(value => console.log(value)); // "h" -200ms-> "w"

    // 停止输入后200ms方能通过最新的那个事件
    inputObservables.pipe(
      debounceTime(200),
      map(event => event.target)
    ).subscribe(value => console.log(value)); // "o" -200ms-> "d"

    // 在3次事件后停止事件流
    inputObservables.pipe(
      take(3),
      map(event => event.target)
    ).subscribe(value => console.log(value)); // "hel"

    // 直到其他 observable 触发事件才停止事件流
    var stopStream = fromEvent(document.querySelector('button'), 'click');
    inputObservables.pipe(
      takeUntil(stopStream),
      map(event => event.target)
    ).subscribe(value => console.log(value)); // "hello" (点击才能看到)
    //二、 产生值
    // 通过提取属性传递一个新的值
    inputObservables.pipe(
      pluck('target', 'value')
    ).subscribe(value => console.log(value)); // "h"

    // 传递之前的两个值
    inputObservables.pipe(
      pluck('target', 'value'),
      pairwise()
    ).subscribe(value => console.log(value)); // ["h", "he"]

    // 只会通过唯一的值
    inputObservables.pipe(
      pluck('data'),
      distinct()
    ).subscribe(value => console.log(value)); // "helo wrd"

    // 不会传递重复的值
    inputObservables.pipe(
      pluck('data'),
      distinctUntilChanged(),
      // 对流进行 scan (reduce) 操作，以获取 count 的值
      scan(count => count + 1, 0)
    ).subscribe(value => console.log(value)); // "helo world"

    // 3、待实现状态更新
  }

  sendRequest(evt) {
    //步骤3、 
    this.count++;
    console.log('ssssssss');
    console.log(evt); // emit传出来了，使用$event接
    console.log(`这是第${this.count}次调用`);
  }
  ngModelChange(i) {
    // 1、待实现数据监听
    console.log(i);
  }
  folwChange() {}
}
