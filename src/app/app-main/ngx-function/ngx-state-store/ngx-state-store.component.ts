import { Component, OnInit } from '@angular/core';
import { fromEvent  } from 'rxjs';
import { map, scan  } from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-ngx-state-store',
  templateUrl: './ngx-state-store.component.html',
  styleUrls: ['./ngx-state-store.component.scss']
})
export class NgxStateStoreComponent implements OnInit {

  // public tabs = [
	// 	{ id: 1, title: 'menu1', active: true },
	// 	{ id: 2, title: 'menu2', active: false },
  // ];
  public tabs = {
    title: 'menu1'
  }
  // 2、查看之前使用，多数都是使用在@Input组件传值进行某些操作，使用get，和set就要写原生的实现defineProtype
  get watchObj() {
    console.log('ppppppppp');
    return this.tabs;
  }
  set watchObj(value) {
    this.tabs = value;
    console.log('tabs set to :', value);
  }
  constructor() { }

  // 1、状态存储
  ngOnInit() {
    const increaseButton = document.querySelector('#increase');
    const decreaseButton = document.querySelector('#decrease');
    const inputElement = document.querySelector('#input');
    const increase = fromEvent(increaseButton, 'click')
          .pipe(
            // 我们映射到一个函数，它会改变状态
            map(() => {
              state => {
                Object.assign({}, state, {count: state.count + 1});
                console.log(state);
              };
            })
          );
    const decrease = fromEvent(decreaseButton, 'click')
          .pipe(
            // 我们还是映射到一个函数，它会减少 count 
            map(() => state => Object.assign({}, state, {count: state.count - 1}))
          )
    const input = fromEvent(inputElement, 'keypress')
          .pipe(
            // 我们还将按键事件映射成一个函数，它会产生一个叫做 inputValue 状态
            map(event => state => Object.assign({}, state, {inputValue: event.target}))
          )
    // 我们将这三个改变状态的 observables 进行合并
    var state = Rx.merge(
      increase,
      decrease,
      input
    ).pipe(
      // scan((state, changeFn) => changeFn(state), {count: 0, inputValue: ''})
    );
    // 我们订阅状态的变化并更新 DOM
    increase.subscribe((state) => {
      console.log(state);
      // document.querySelector('#count').innerHTML = state.count;
    });

    // 为了优化渲染，我们可以检查什么状态是实际上已经发生变化了的
    // var prevState = {};
    // state.subscribe((state) => {
    //   if (state.count !== prevState.count) {
    //     document.querySelector('#count').innerHTML = state.count;
    //   }
    //   if (state.inputValue !== prevState.inputValue) {
    //     document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    //   }
    //   prevState = state;
    // });
  }

  ngModelChange(i) {
    // 2、实现数据监听，angular实现数据监听，需使用ngDoCheck()生命周期钩子和ngOnChanges(),详见angular-basic
    console.log(i);
  }
}
