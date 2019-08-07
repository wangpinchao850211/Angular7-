import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import * as Rx from 'rxjs';

// 使用store
interface AppState {
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public greeting = 'green';
  count$: Rx.Observable<number>;
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
}
