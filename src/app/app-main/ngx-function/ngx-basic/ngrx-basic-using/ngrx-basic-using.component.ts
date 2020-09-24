import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { interval, fromEvent, timer, Subject, throwError, Subscriber, Subscription, BehaviorSubject, forkJoin, of, from, Observable } from 'rxjs';
import { switchMap, debounceTime, throttleTime, distinctUntilChanged, map, filter, catchError, mergeMap, delay, take, takeUntil, pluck, pairwise, distinct, scan } from 'rxjs/operators';
// 操作符分为实例操作符（Observable 实例上的方法，方法内部使用this）和静态操作符（内部不使用this），常见的静态操作符如创建操作符Rx.Observable.interval(1000 /* 毫秒数 */);
import * as Rx from 'rxjs';
import { NavigationStart, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
// Rx.of(1,2,3) 直接可使用
// Rx.Observable

@Component({
  selector: 'app-ngrx-basic-using',
  templateUrl: './ngrx-basic-using.component.html',
  styleUrls: ['./ngrx-basic-using.component.scss']
})
export class NgrxBasicUsingComponent implements OnInit, OnDestroy {

  public intervalMsg = '';
  public mousemoveMsg = '';
  @ViewChild('mouseEle') mouseEle: ElementRef;
  @ViewChild('flowControl') flowControl: ElementRef;
  public tabs = [
		{ id: 1, title: 'menu1', active: true },
		{ id: 2, title: 'menu2', active: false },
  ];

  refreshNotif = new BehaviorSubject("");
  subscription: Subscription; // 订阅
  private searchTerms = new Subject<string>();
  public timerVal: number = 0;

  private count = 0;
  get sss() {
    return this.timerVal;
  }

  private routerEventDestroy = null; // use this identifier to clear router.events (observable)
  private navStart: Observable<NavigationStart>;

  constructor(
    private router: Router,
    // ActivatedRoute 是一个可注入的路由器服务，它使用可观察对象来获取关于路由路径和路由参数的信息。比如，ActivateRoute.url 包含一个用于汇报路由路径的可观察对象。
    private activatedRoute: ActivatedRoute
    ) {

    // 创建，转换成 observables

    // 来自一个或多个值
    Rx.of('foo', 'bar');

    // 来自数组
    const inputObservable = Rx.from(this.tabs);
    inputObservable.subscribe((v) => { // 需要有事件流触发，并不能实现defineProtype
      console.log(v);
    });

    // 来自事件
    Rx.fromEvent(document.querySelector('button'), 'click');

    // 来自 Promise
    // Rx.fromPromise(fetch('/users')); 使用的fetch api

    // 路由使用2
    this.navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
    // 路由使用3 （使用结束有打印，上面的start就没有，估测上面的更快）
    this.routerEventDestroy = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        console.log(event.url.indexOf('askAQuestion') === -1);
    });
  }

  ngOnInit() {
    //1、 Create an observable from a counter
    const secondsCounter = interval(1000);
    const CounterSubscription = secondsCounter.subscribe((n) => {
      this.intervalMsg = `It's been ${n} seconds since subscribing!`;
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
    //3、 Create an Observable that will publish mouse movements (监听鼠标事件)
    const mouseMoves = fromEvent(this.mouseEle.nativeElement, 'mousemove');
    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // 注意: 键盘事件用KeyboardEvent，鼠标事件用MouseEvent
      // Log coords of mouse movements
      this.mousemoveMsg = `开始监听：Coords: ${evt.clientX} X ${evt.clientY}`;
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 290 && evt.clientY < 340) {
        this.mousemoveMsg = '已移除监听';
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
    var inputObservables = fromEvent(this.flowControl.nativeElement, 'change');

    // 过滤掉小于3个字符长度的目标值
    // 
    inputObservables.pipe(
      filter(event => `${event['target']}`.length > 3),
      map(event => event['target'].value)
      )
      .subscribe(value => console.log(value)); // 输入框的值

    // 延迟事件
    inputObservables.pipe(
      delay(200),
      map(event => event['target'].value)
    ).subscribe(value => console.log(value)); // "h" -200ms-> "e" -200ms-> "l" ...

    // 每200ms只能通过一个事件
    inputObservables.pipe(
      throttleTime(200),
      map(event => event['target'].value)
    ).subscribe(value => console.log(value)); // "h" -200ms-> "w"

    // 停止输入后200ms方能通过最新的那个事件
    inputObservables.pipe(
      debounceTime(200),
      map(event => event['target'].value)
    ).subscribe(value => console.log(value)); // "o" -200ms-> "d"

    // 在3次事件后停止事件流
    inputObservables.pipe(
      take(3), 
      map(event => event['target'].value)
    ).subscribe(value => console.log(value)); // "hel"

    // 直到其他 observable 触发事件才停止事件流
    var stopStream = fromEvent(document.querySelector('button'), 'click');
    inputObservables.pipe(
      // takeUtil：该 Observable 第一次发出值会使 takeUntil 的 输出 Observable 停止发出由源 Observable 所发出的值。
      takeUntil(stopStream),
      map(event => event['target'].value)
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

    // this.route.events.pipe()使用
    // 使用1：(拿到constructor里了，否则没效果在Init之后)
    
    // 使用2：
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
    // 使用3：Ro项目(拿到constructor里了，否则没效果在Init之后)

  }

  ngOnDestroy() { // 销毁
		this.routerEventDestroy.unsubscribe();
	}
  sendRequest(evt) {
    //步骤3、 
    this.count++;
    console.log(evt); // emit传出来了，使用$event接
    console.log(`这是第${this.count}次调用`);
  }
  folwChange() {
    // change时可以调取现Init里的方法
  }

}
