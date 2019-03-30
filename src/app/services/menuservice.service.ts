import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  menuList: Menu;

  private Menu = {
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
    // for (const iterator of Menu) { // 不好使
    //   console.log(iterator);
    // }
  }


}
