import { Component, OnInit, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import * as Rx from 'rxjs';
import { slideToRight, slideToBottom } from '../../../animation/router.anim';

// 使用store
interface AppState {
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideToBottom],
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnim') state; // 动画路由直接写这个绑定的这个组件类上，不能写在标签的指令上
  public greeting = 'green';
  public currentGeeting = this.greeting;
  count$: Rx.Observable<number>;
  // 倒计时
  startDate = new Date(2019, 12, 22);
  futureDate = new Date(2020, 2, 2);

  title="向history.pushState push url 并不跳转";
  
  myContext = {$implicit: 'World', localSk: 'Svet'}; // ngTemplateOutlet

  storageNewVal: string = 'oldValue';

  constructor(
    private store: Store<AppState> // 注入store
  ) {
    this.count$ = this.store.pipe(select('count'));
    console.log(this.count$); 

    // 初始化一个sessionStorage值,便于检测
    window.localStorage.setItem('watchStorage', 'oldValue');

    // WindowEventHandlers.onstorage 属性包含一个在storage事件触发时的事件句柄。 
    // 注意：该事件不在导致数据变化的当前页面触发（如果浏览器同时打开一个域名下面的多个页面，当其中的一个页面改变 sessionStorage 或 localStorage 的数据时，其他所有页面的  storage  事件会被触发，而原始页面并不触发 storage 事件）

    // 单页面实现，监听自定义事件实现！！！
    window.addEventListener('setItemEvent', (e) => {
      // console.log(e);
      this.storageNewVal = e['newValue'];
    });

  }

  ngOnInit() {
    this.count$.subscribe((count) => {
      // 回到home页看看全区count是否变化，在这个位置可以接受到最新store的count数
      console.log(`home页的次数是${count}`);
    })

  }

  updateGreeting() {
    this.greeting = this.currentGeeting; // onblur再赋值
    console.log(this.greeting);
  }

  PushState() {
    const newState = {
        url: window.location.origin + '/newhistoryurl',
        title: document.title,
        state: 'login'
    };
    console.log(newState);
    window.history.pushState(newState, '', '/newhistoryurl');
  }
}
