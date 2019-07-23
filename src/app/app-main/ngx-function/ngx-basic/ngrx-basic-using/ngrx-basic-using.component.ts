import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, Subject, throwError, Subscriber, Subscription, BehaviorSubject, forkJoin, of, from, Observable } from 'rxjs';
import { switchMap, debounceTime, throttleTime, distinctUntilChanged, map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx-basic-using',
  templateUrl: './ngrx-basic-using.component.html',
  styleUrls: ['./ngrx-basic-using.component.scss']
})
export class NgrxBasicUsingComponent implements OnInit {

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
  }

  sendRequest(evt) {
    //步骤3、 
    this.count++;
    console.log('ssssssss');
    console.log(evt); // emit传出来了，使用$event接
    console.log(`这是第${this.count}次调用`);
  }
}
