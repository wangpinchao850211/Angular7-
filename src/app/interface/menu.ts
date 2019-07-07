export interface Menu { // 接口只能作为类型导出使用，而enum是作为值直接使用
    AngularBasic?: Array<String>;
    Angular_Rxjs?: Array<String>;
    Angular_Animate?: Array<String>;
    chain_shared: Array<String>,
    Angular_Material: Array<String>,
    Angular_Scss: Array<String>,
}
export enum AngularRxjs {
  AngularRxjs = 'AngularRxjs',
}

export enum AngularAnimate {
  AngularAnimate = 'AngularAnimate',
}
// export enum MenuList {
//     let string[] AngularBasic = ['HeroList', 'Angular_Basic'],
//     let list: Array<string> = [1,2,3]
// }

export const menu = {
    AngularBasic: [
        'heros',
        'routers',
        'communication',
        'directivesOrpip',
        'form',
        'dependencyinjection'
    ],
    AngularRxjs: ['rxRoot'],
    AngularAnimate: ['animateRoot'],
    chain_shared: ['CommonComponent'],
    Angular_Material: ['AngularMaterial'],
    Angular_Scss: ['AngularScss'],
    [Symbol.iterator]() { // 有ts校验，未循未成
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
        }
    }
};

