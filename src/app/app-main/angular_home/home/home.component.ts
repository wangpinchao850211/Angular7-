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
  ) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
    console.log(this.count$); // 回到home页看看全区count是否变化
  }

  updateGreeting() {
    this.greeting = 'yellow';
  }
}
