import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import * as Rx from 'rxjs';
import { StarField } from 'src/app/utils/star';
import { slideToRight, slideToBottom } from '../../../animation/router.anim';

// 使用store
interface AppState {
  count: number;
}

interface Spend {
  label: string,
  value: number
}

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 * 
 * 牛XXXXX！！！
 */
const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  typeCache[<string>label] = true; // 每次把已存在的状态存储到typeCache里，如果这次传入的label有对应值，抛出错误
  return <T>label;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideToBottom],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding('@routeAnim') state; // 动画路由直接写这个绑定的这个组件类上，不能写在标签的指令上
  public greeting = 'green'; // 传入子组件的值，失去焦点再赋值能够看出来效果
  public currentGeeting = this.greeting;
  count$: Rx.Observable<number>;
  // 倒计时
  startDate = new Date(2019, 12, 22);
  futureDate = new Date(2020, 2, 2);

  title = "向history.pushState push url 并不跳转";

  FYList: Spend[] = [];

  myContext = { $implicit: 'World', localSk: 'Svet' }; // ngTemplateOutlet

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


    // ts 例子1
    const x = this.extend({ a: 'hello' }, { b: 42 });
    console.log(x);
    /**
     *  { a: "hello", b: 42 }
     * */

    // ts例子2：创建 K: V
    const Direction = this.strEnum(['North', 'South', 'East', 'West']);
    console.log(Direction);
    /**
     * {
          East: "East"
          North: "North"
          South: "South"
          West: "West"
        }
     * */

  }

  // 类型校验合并两个对象
  extend<T extends object, U extends object>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
      (<T>result)[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = second[id];
      }
    }
    return result;
  }

  // example
  // 用于创建字符串列表映射至 `K: V` 的函数
  strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }

  ngOnInit() {
    this.count$.subscribe((count) => {
      // 回到home页看看全区count是否变化，在这个位置可以接受到最新store的count数
      console.log(`home页的次数是${count}`);
    })

    for (let index = 10; index < 22; index++) {
      this.FYList.push({
        label: `FY${index}`,
        value: -96789757.67
      })
    }
  }

  ngAfterViewInit() {
    // const starField = new StarField('fullScreen').render(333, 3);
    // console.log(starField);
  }

  currentChange(item, event) {
    console.log(event);
    console.log(item);
    console.log(event.target.value);
  }

  currentInput(item, event) {
    event.preventDefault();

    console.log(event);
    console.log(item);
    // console.log(item.value.includes('$'));
    // if (!item.value.includes('$')) {
    //   item.value = `$${item.value}`
    // }

    console.log(event.target.value);
    console.log(event.data);
    // console.log(ev.keyCode);

    // if (ev.keyCode!=32 && ev.keyCode!=13 && ev.keyCode!=0) {
    //     ev.returnValue=false
    // }

    const reg = /^[0-9-]/g;
    console.log(reg.test(event.data));
    // if (event.target.value.includes('.') && event.data === '.') {
    //   event.preventDefault();
    // }

    if (reg.test(event.data)) {
      item.value = event.target.value;
    } else {
      event.preventDefault();
      // ev.target.value = item.value;
      console.log(event.target.value);
    }
    // ev.target.value = ev.target.value.replace(/\s/g,"");
    // ev.target.value = ev.target.value.replace(/[^\d\.]/g, '')
    console.log(item);
  }

  onKeyPress(item, event) {
    console.log(event.keyCode);
    console.log(item);
    // 48-57
    if (event.keyCode !== 96 || event.keyCode !== 97 || event.keyCode !== 98 ||
      event.keyCode !== 99 || event.keyCode !== 100 || event.keyCode !== 101 ||
      event.keyCode !== 102 || event.keyCode !== 103 || event.keyCode !== 104 ||
      event.keyCode !== 105 || event.keyCode !== 109 || event.keyCode !== 110) {
      event.returnValue = false;
      event.preventDefault();
      return false;
    }

    if (`${item.value}`.includes('.') && event.key === '.') {
      event.preventDefault();
    }

    // event.preventDefault();

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
