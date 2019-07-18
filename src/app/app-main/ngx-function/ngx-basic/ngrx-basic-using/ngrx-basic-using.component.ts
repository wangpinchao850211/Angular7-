import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx-basic-using',
  templateUrl: './ngrx-basic-using.component.html',
  styleUrls: ['./ngrx-basic-using.component.scss']
})
export class NgrxBasicUsingComponent implements OnInit {

  private searchTerms = new Subject<string>();
  public timerVal: number = 0;

  get sss() {
    return this.timerVal;
  }
  constructor() { }

  ngOnInit() {
    // Create an observable from a counter
    const secondsCounter = interval(1000);
    secondsCounter.subscribe((n) => {
      console.log(`It's been ${n} seconds since subscribing!`)
      // if (n > 10) { 没找到关闭方法，有一个timer可使用下
      //   secondsCounter.unsubscribe();
      // }
    });
    // timer to use
    const _timer = timer(1000).subscribe(() => {
        console.log('9999999999');
        this.timerVal = 1;
    });
    if (this.sss > 0) {
      _timer.unsubscribe();
    }
    // Create an observable from an event
    const el = document.getElementById('my-element');
 
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(el, 'mousemove');
    
    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
    // search
    this.searchTerms.pipe(
        filter(param => param.length > 3),
        debounceTime(300), // 流更新结束后 0.3s 才会通知观察者 
        distinctUntilChanged(), // 是说只有当值和上一次通知时的值不一样的时候才通知观察者 
        // switchMap(param => {console.log(param)})
    ).subscribe(result => {
        console.log(result);
    });
  }

}
