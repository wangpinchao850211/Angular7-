import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { INCREMENT, DECREMENT, RESET } from 'src/app/store/counter';
import { fromEvent, Subscription  } from 'rxjs';
import { map, scan  } from 'rxjs/operators';
import * as Rx from 'rxjs';

// 使用store
interface AppState {
  count: number;
}

@Component({
  selector: 'app-ngx-state-store',
  templateUrl: './ngx-state-store.component.html',
  styleUrls: ['./ngx-state-store.component.scss']
})
export class NgxStateStoreComponent implements OnInit, OnDestroy {

  public tabs = {
    title: 'menu1'
  }
  // 2、查看之前使用，多数都是使用在@Input组件传值进行某些操作，使用get，和set就要写原生的实现defineProtype
  get watchObj() {
    return this.tabs;
  }
  set watchObj(value) {
    this.tabs = value;
  }

  // ngrx/store使用
  count$: Rx.Observable<number>; // 必须传教一个Observable的对象属性
  currentCount: number;
  private countStateSubscription: Subscription; // 可以销毁订阅对象
  constructor(
    private store: Store<AppState> // 注入store
  ) { 
    this.count$ = store.pipe(select('count')); // 从app.module.ts中获取count状态流
    this.countStateSubscription = this.count$.subscribe((num) => {
      console.log('count数是'+num);
    });
  }

  // 更新store值
  increment() {
    this.store.dispatch({ type: INCREMENT });
    console.log(this.store);
    console.log(this.count$);
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
    console.log(this.count$);
  }

  reset() {
    this.store.dispatch({ type: RESET });
    console.log(this.count$);
  }

  ngOnDestroy() {
    this.countStateSubscription.unsubscribe();
  }

  // 1、状态存储
  ngOnInit() {
    // store 通过订阅来获取store数据值的更新
    this.countStateSubscription = this.count$.subscribe((count) => {
      console.log(count);
      this.currentCount = count; // 获取到全局store的值 (考虑一下，我要获取其他全局对象来判断要如何处理)
      // 操作store页面更改count，回到home页会获取到最新的count值。关于上面的问题，考虑需要使用的对象都放到一个reducer的state下，便于使用和统一管理。如果互相不关联可以启单独的reducer
      // 详细使用见pet-tags-ngrx项目
    })
  }
  // 2、实现数据监听，angular实现数据监听，需使用ngDoCheck()生命周期钩子和ngOnChanges(),详见angular-basic

}
