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
  count$: Rx.Observable<number>;
  // 倒计时
  startDate = new Date(2019, 12, 22);
  futureDate = new Date(2020, 2, 2);

  title="向history.pushState push url 并不跳转";
  
  constructor(
    private store: Store<AppState> // 注入store
  ) {
    this.count$ = this.store.pipe(select('count'));
    console.log(this.count$); 
  }

  ngOnInit() {
    this.count$.subscribe((count) => {
      // 回到home页看看全区count是否变化，在这个位置可以接受到最新store的count数
      console.log(`home页的次数是${count}`);
    })

  }

  updateGreeting() {
    this.greeting = 'yellow';
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
