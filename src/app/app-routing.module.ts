import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './app-main/layout/layout.component';
import { HomeComponent } from './app-main/angular_home/home/home.component';
import { LifeCycleComponent } from './app-main/angular_basic/life-cycle/life-cycle.component';
import { RoutesComponent } from './app-main/angular_basic/route/routes/routes.component';
import { ProductComponent } from './app-main/angular_basic/route/product/product.component';
import { ProductdetailComponent } from './app-main/angular_basic/route/productdetail/productdetail.component';
import { FormComponent } from './app-main/angular_basic/form/form.component';
import { CommunicationComponent } from './app-main/angular_basic/communication/communication.component';
import { FuzuluyouOComponent } from './app-main/angular_basic/route/fuzuluyou-o/fuzuluyou-o.component';
import { FuzuluyouTComponent } from './app-main/angular_basic/route/fuzuluyou-t/fuzuluyou-t.component';
import { ChainLayoutComponent } from './app-main/chain_module/chain-layout/chain-layout.component';
import { CommonComponentComponent } from './app-main/chain_module/common-component/common-component.component';
import { DeplayoutComponent } from './app-main/angular_basic/DependencyInjection/deplayout/deplayout.component';
import { AngularScssComponent } from './app-main/angular-scss/angular-scss.component';
import { DirectivePipeComponent } from './app-main/angular_basic/directive-pipe/directive-pipe.component';
import { NgxFunctionComponent } from './app-main/ngx-function/ngx-function.component';
import { AngularAnimateComponent } from './app-main/angular-animate-layout/angular-animate/angular-animate.component';
import { RemlayoutComponent } from './app-main/rem/remlayout/remlayout.component';
import { NgrxBasicUsingComponent } from './app-main/ngx-function/ngx-basic/ngrx-basic-using/ngrx-basic-using.component';
import { NgxStateStoreComponent } from './app-main/ngx-function/ngx-state-store/ngx-state-store.component';
import { HostUseComponent } from './app-main/mvcH5Css3/host-use/host-use.component';
import { H5Css3LayoutComponent } from './app-main/mvcH5Css3/h5-css3-layout/h5-css3-layout.component';
import { NgContentComponent } from './app-main/angular_basic/ng-content/ng-content.component';
import { PeekABooComponent } from './app-main/angular_basic/peek-a-boo/peek-a-boo.component';
import { WorkMemberListComponent } from './app-main/angular_basic/work-member-list/work-member-list.component';
import { UploadFileComponent } from './app-main/angular_basic/upload-file/upload-file.component';
import { WpcNg2FileUploadComponent } from './app-main/angular_basic/wpc-ng2-file-upload/wpc-ng2-file-upload.component';
import { CkeditorComponent } from './app-main/angular_editor/ckeditor/ckeditor.component';
import { EditorComponent } from './app-main/angular_editor/editorLayout';
import { EchartLayoutComponent } from './app-main/echart/echart-layout/echart-layout.component';
import { NgxEchartComponent } from './app-main/echart/ngx-echart/ngx-echart.component';
import { SelfCyclingComponent } from './app-main/angular_basic/self-cycling/self-cycling.component';
import { AngularAnimateLayoutComponent } from './app-main/angular-animate-layout/angular-animate-layout.component';
import { MaterialCdkOverlayComponent } from './app-main/angular_material/overlay/material-cdk-overlay/material-cdk-overlay.component';
import { DirectExtendComponent } from './app-main/angular_material/overlay/overlayChangeDefaultContainer/direct-extend/direct-extend.component';
import { MaterialLayoutComponent } from './app-main/angular_material/material-layout/material-layout.component';
import { Code404Component } from './app-main/code404/code404.component';
import { CanDeactivateGuard } from './services/auth/can-deactivate.guard';
import { LodashCourseComponent } from './app-main/lodash-course/lodash-course.component';
import { CourseComponent } from './app-main/lodash-course/course/course.component';

const routes: Routes = [
  // Main redirect。  pathMatch：重定向路由需要一个 pathMatch 属性，来告诉路由器如何用 URL 去匹配路由的路径，否则路由器就会报错。路由器应该只有在完整的 URL等于 '' 时才选择 对应 组件，因此要把 pathMatch 设置为 'full'。
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // App views
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  // { path: 'AngularBasic', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'AngularBasic',
    component: LayoutComponent,
    children: [
      { path: 'lifecycle', component: LifeCycleComponent },
      { path: 'peekboo', component: PeekABooComponent },
      {
        path: 'routers',
        component: RoutesComponent,
        children: [
          // {path:'', component: xxxx}, //这种就是子路由的空路径的配置，跳转时a标签[routerLink]="['./']"设置成这样
          { path: 'product/:id', component: ProductComponent },
          {
            path: 'productdetail',
            component: ProductdetailComponent,
            data: { title: '路由定义传递固定值' } // 第三种传值方法
          }, // 传递参数直接在routerLink增加参数即可
          // 下面配置的是辅助路由，在跳转时添加，aux映射组件即可，无需写跳转路径，即会跳到aux路由插座下
          { path: 'fuzuluyouO', component: FuzuluyouOComponent, outlet: 'aux' },
          { path: 'fuzuluyouT', component: FuzuluyouTComponent, outlet: 'aux' }
          // { path: 'fuzuluyouO', component: FuzuluyouOComponent },
          // { path: 'fuzuluyouT', component: FuzuluyouTComponent }
        ]
      },
      { path: 'communication', component: CommunicationComponent },
      { path: 'form', component: FormComponent },
      { path: 'dependencyinjection', component: DeplayoutComponent },
      { path: 'directivesOrpip', component: DirectivePipeComponent },
      { path: 'ngContent', component: NgContentComponent },
      { path: 'showWorkMemberList', component: WorkMemberListComponent },
      { path: 'fileUpload', component: UploadFileComponent },
      {
        path: 'wpcNg2FileUpload', component: WpcNg2FileUploadComponent
      },
      {
        path: 'selfCyclingComponent', component: SelfCyclingComponent
      }
    ]
  },
  {
    path: 'AngularRxjs',
    component: NgxFunctionComponent,
    children: [
      { path: 'rxjsBasic', component: NgrxBasicUsingComponent },
      { path: 'ngrxStore', component: NgxStateStoreComponent },
    ]
  },
  {
    path: 'AngularAnimate',
    component: AngularAnimateLayoutComponent,
    children: [
      { path: 'animateBasic', component: AngularAnimateComponent },
    ]
  },
  {
    path: 'chain_shared',
    component: ChainLayoutComponent,
    children: [
      { path: 'CommonComponent', component: CommonComponentComponent },
    ]
  },
  {
    path: 'Angular_Material',
    component: MaterialLayoutComponent,
    children: [
      { path: 'Overlay', component: MaterialCdkOverlayComponent },
      { path: 'ChangeOverlayDefaultContainer', component: DirectExtendComponent }
    ]
  },
  {
    path: 'Angular_Scss',
    component: MaterialLayoutComponent,
    children: [
      { path: 'AngularScss', component: AngularScssComponent },
    ]
  },
  {
    path: 'Angular_Editor',
    component: EditorComponent,
    children: [
      { path: 'CKEditor', component: CkeditorComponent },
    ]
  },
  {
    path: 'Echart',
    component: EchartLayoutComponent,
    children: [
      { path: 'NgxEchart', component: NgxEchartComponent },
    ]
  },
  {
    path: 'Mvc_Use_h5_Css3',
    component: H5Css3LayoutComponent,
    children: [
      { path: 'MvcUseH5Css3', component: HostUseComponent },
    ]
  },
  {
    path: 'LodashCourse',
    component: LodashCourseComponent,
    children: [
      { path: 'Course', component: CourseComponent }
    ]
  },
  {
    path: 'remlayout',
    component: RemlayoutComponent,
    // outlet: 'remaux', // 使用了变量控制这个组件的显示隐藏，并且路由跳转
  },
  // Handle all other routes
  { path: '**', component: Code404Component } // 一定要放在路由的最后面
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false, relativeLinkResolution: 'legacy' } // <-- debugging purposes only，打印路由跳转变化
      // <-- debugging purposes only，打印路由跳转变化
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
