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

export const menu = { // 导出对象
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
};

export enum MenuToTab {
    
}