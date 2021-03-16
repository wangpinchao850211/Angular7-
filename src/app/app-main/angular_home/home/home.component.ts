import { Component, OnInit, HostBinding } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import * as Rx from 'rxjs';
import * as _ from 'lodash';
import { slideToRight, slideToBottom } from '../../../animation/router.anim';

// 使用store
interface AppState {
  count: number;
}

interface Spend {
  label: string,
  value: string,
  spendValid: boolean
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

  FYList: Spend[] = [];
  OriginFyList: Spend[] = [];

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

    for (let index = 10; index < 12; index++) {
      this.FYList.push({
        label: `FY${index}`,
        value: '0.00',
        spendValid: false
      })
    }

    this.OriginFyList = _.cloneDeep(this.FYList);
    this.FYList.map((item) => {
      item.value = this.formatToCurrent(item.value)
    });
  }

  formatToCurrent(str) {
    // console.log(str);
    if (str.includes('$')) {
      str = str.replace('$', '');
    }
    let minus = false;
    if (str.includes('-')) {
      str = str.replace('-', '');
      minus = true;
    }
    const arr = str.split('.');
    // remove 0
    let falg = true;
    let ind = 0;
    for (let j = 0; j < arr[0].length; j++) {
      const item = arr[0][j];
      if (Number(item) === 0 && falg) {
        continue
      } else {
        ind = j;
        falg = false;
        break
      }
    }
    arr[0] = arr[0].substring(ind); // 截取0之后的整数字符
    // const Formatint = Number(arr[0]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 有问题会四舍五入
    const Formatint = arr[0].split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + ',')) + prev
    });
    // console.log(Formatint);
    if (arr[1] === undefined) {
      arr[1] = '00';
    }
    str = `${Formatint.split('.')[0]}.${arr[1]}`;
    if (minus) {
      str = `-${str}`
    }
    str = `$${str}`
    // console.log(str);
    return str;
  }

  changeToNum(str) {
    const arr = str.split('.');
    arr[0] = arr[0].replace('$', '').replaceAll(',', '');
    return `${arr[0]}.${arr[1]}`;
  }

  // focus
  showOriginData(item, index) {
    for (let i = 0; i < this.OriginFyList.length; i++) {
      const element = this.OriginFyList[i];
      if (i === index) {
        item.value = this.changeToNum(element.value);
      }
    }
  }

  // blur
  formatOriginData(item, event, index) {
    event.target.value = event.target.value.replace('$', '');
    const reg = /^\d+(\.\d+)?$/g;
    const regC = /[\u4E00-\u9FA5]/g;
    const regEnglish = /[A-Za-z`~!@#$%^&*()_=+|\\\{};:'",<>/?\s]/g;
    if (!reg.test(event.target.value) && (regC.test(event.target.value) || regEnglish.test(event.target.value))) {
      item.spendValid = true;
      event.target.value = `$0.00`;
      item.value = `$0.00`;
    } else {
      item.spendValid = false;
    }

    if (event.target.value === '0') {
      event.target.value = `$0.00`;
      item.value = `$0.00`;
    } else {
      event.target.value = this.formatToCurrent(event.target.value);
      item.value = event.target.value;
    }

    // save to origindata
    this.changeToTanf(index, this.changeToNum(item.value));
  }

  changeToTanf(index, currentData) {
    for (let i = 0; i < this.OriginFyList.length; i++) {
      const element = this.OriginFyList[i];
      if (i === index) {
        element.value = currentData
      }
    }
  }

  onKeyUp() {
    if (this.chineseFalg) {
      this.chineseFalg = false;
    }
  }

  chineseFalg = false;
  compositionstart(event) {
    this.chineseFalg = true;
    // event.stopPropagation();
    // event.preventDefault();
    // event.returnValue = false;
    // return false
  }

  disabledChinese(item, event) {
    console.log(event);
    console.log(item);
    if (event.data !== null) {
      const reg = /[\u4E00-\u9FA5]/g;
      // console.log(reg.test(event.data));
      /**
       * test chinese
       * */
      // console.log(this.chineseFalg);
      if (reg.test(event.data) && this.chineseFalg) {
        item.spendValid = true;
        event.target.value = `$0.00`;
        item.value = `$0.00`;
      } else {
        item.spendValid = false;
      }
      const reg2 = /^\d+(\.\d+)?$/g;
      // console.log(reg2.test(event.data));
      // console.log(event.data.match(reg2));
      if (!(reg2.test(event.data)) && event.data.match(reg2).length>0 && this.chineseFalg) {
        const reg = new RegExp(`${event.data}?`, 'g');
        event.target.value = event.target.value.replace(reg, '');
        item.value = event.target.value;
      }
    }
  }

  onKeyDown(item, event) {
    console.log(event.keyCode);
    console.log(item);

    console.log(!(event.keyCode === 190 || event.keyCode === 37 || event.keyCode === 39 ||
      event.keyCode === 8 || event.keyCode === 57 || event.keyCode === 229 ||
      event.keyCode === 48 || event.keyCode === 49 || event.keyCode === 50 ||
      event.keyCode === 51 || event.keyCode === 52 || event.keyCode === 53 ||
      event.keyCode === 54 || event.keyCode === 55 || event.keyCode === 56 ||
      event.keyCode === 96 || event.keyCode === 97 || event.keyCode === 98 ||
      event.keyCode === 99 || event.keyCode === 100 || event.keyCode === 101 ||
      event.keyCode === 102 || event.keyCode === 103 || event.keyCode === 104 ||
      event.keyCode === 105 || event.keyCode === 109 || event.keyCode === 110 ||
      event.keyCode === 189));
    // 48-57
    if (!(event.keyCode === 190 || event.keyCode === 37 || event.keyCode === 39 ||
          event.keyCode === 8 || event.keyCode === 57 || event.keyCode === 229 ||
          event.keyCode === 48 || event.keyCode === 49 || event.keyCode === 50 ||
          event.keyCode === 51 || event.keyCode === 52 || event.keyCode === 53 ||
          event.keyCode === 54 || event.keyCode === 55 || event.keyCode === 56 ||
          event.keyCode === 96 || event.keyCode === 97 || event.keyCode === 98 ||
          event.keyCode === 99 || event.keyCode === 100 || event.keyCode === 101 ||
          event.keyCode === 102 || event.keyCode === 103 || event.keyCode === 104 ||
          event.keyCode === 105 || event.keyCode === 109 || event.keyCode === 110 ||
          event.keyCode === 189)) {
          event.returnValue = false;
          // event.preventDefault();
          // return false;
    }

    if (`${item.value}`.includes('.') && event.key === '.') {
      event.preventDefault();
    }

    if (`${item.value}`.includes('-') && event.key === '-') {
      event.preventDefault();
    }

    // event.preventDefault();

    console.log(item);

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
