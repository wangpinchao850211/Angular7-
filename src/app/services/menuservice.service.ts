import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  menuList: Menu;

  public menu = {
    Angular_Basic: [
        'Angular_Basic',
        'HeroList',
    ],
    AngularRxjs: ['AngularRxjs'],
    AngularAnimate: ['AngularAnimate'],
    [Symbol.iterator]() { // 有ts校验，未循环成
        let index = 0;
        const arr = [...this.AngularBasic, ...this.AngularRxjs, ...this.Angular_Animate];
        const len = arr.length;
        return {
            next() {
                if (index < len) {
                    return {
                        value: arr[index++],
                        done: false
                    };
                } else {
                    return {
                        value: arr[++index],
                        done: true
                    };
                }
            }
        };
    }
  };

  constructor() {
    // for (const item of this.menu) { // iterator还是 不好使，只能换成entries来遍历了
    //   console.log(item);
    // }
    for (const [key, value] of Object.entries(this.menu)) {
      console.log(`${key}:${value}`);
    }
  }


}
