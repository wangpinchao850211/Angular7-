export interface Menu { // 接口只能作为类型导出使用，而enum是作为值直接使用
    AngularBasic?: Array<String>;
    Angular_Rxjs?: Array<String>;
    Angular_Animate?: Array<String>;
    chain_shared: Array<String>,
    Angular_Material: Array<String>,
    Angular_Scss: Array<String>,
    Angular_Editor: Array<String>,
    Mvc_Use_h5_Css3: Array<String>
}

export interface MenuTab {
  readonly id?: string;
  url: string;
  title: string;
  isSelect?: boolean;
}

export enum MenuToTabMapping {
  Home = '/home',
  lifecycle = '/AngularBasic/lifecycle',
  peekboo = '/AngularBasic/peekboo',
  heros = '/AngularBasic/heros/dashboard',
  communication = '/AngularBasic/communication',
  form = '/AngularBasic/form',
  dependencyinjection = '/AngularBasic/dependencyinjection',
  directivesOrpip = '/AngularBasic/directivesOrpip',
  ngContent = '/AngularBasic/ngContent',
  showWorkMemberList = '/AngularBasic/showWorkMemberList',
  fileUpload = '/AngularBasic/fileUpload',
  wpcNg2FileUpload = '/AngularBasic/wpcNg2FileUpload',
  rxjsBasic = '/AngularRxjs/rxjsBasic',
  ngrxStore = '/AngularRxjs/ngrxStore',
  animateBasic = '/AngularAnimate/animateBasic',
  CommonComponent = '/chain_shared/CommonComponent',
  AngularMaterial = '/Angular_Material/AngularMaterial',
  AngularScss = '/Angular_Scss/AngularScss',
  CKEditor = '/Angular_Editor/CKEditor',
  MvcUseH5Css3 = '/Mvc_Use_h5_Css3/MvcUseH5Css3',
  Echart = '/Echart/NgxEchart'
}

export enum AngularRxjs {
  AngularRxjs = 'AngularRxjs',
}

export enum AngularAnimate {
  AngularAnimate = 'AngularAnimate',
}

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
