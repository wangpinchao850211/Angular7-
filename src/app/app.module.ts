import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// 路由缓存
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from './services/RouteReuseStrategy.service';
// cdk
import { DirectExtendComponent } from './app-main/angular_material/overlay/overlayChangeDefaultContainer/direct-extend/direct-extend.component';
import { CdkOverlayContainerDirective } from './app-main/angular_material/overlay/cdk-overlay-container.directive';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { CdkOverlayContainer } from './cdk-overlay-container';
import { AppOverlayContainer } from './cdk-overlay-container2';
import { Platform } from '@angular/cdk/platform';

// 注册store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';
import { tabReducer } from './store/tab-reducer';

import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatNativeDateModule } from '@angular/material/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubCorner } from './app-main/github-corner/github-corner'; // gitHub 小logo
import { Code404Component } from './app-main/code404/code404.component';
import { AppMenuComponent } from './app-main/app-menu/app-menu.component';
import { LifeCycleComponent } from './app-main/angular_basic/life-cycle/life-cycle.component';
import { HomeComponent } from './app-main/angular_home/home/home.component';
import { FormComponent } from './app-main/angular_basic/form/form.component';
import { CommunicationComponent } from './app-main/angular_basic/communication/communication.component';
import { LayoutComponent } from './app-main/layout/layout.component';
import { RoutesComponent } from './app-main/angular_basic/route/routes/routes.component';
import { ProductComponent } from './app-main/angular_basic/route/product/product.component';
import { ProductdetailComponent } from './app-main/angular_basic/route/productdetail/productdetail.component';
import { FuzuluyouOComponent } from './app-main/angular_basic/route/fuzuluyou-o/fuzuluyou-o.component';
import { FuzuluyouTComponent } from './app-main/angular_basic/route/fuzuluyou-t/fuzuluyou-t.component';
import { ChainLayoutComponent } from './app-main/chain_module/chain-layout/chain-layout.component';
import { CommonComponentComponent } from './app-main/chain_module/common-component/common-component.component';
import { Product1Component } from './app-main/angular_basic/DependencyInjection/product1/product1.component';
import { Product2Component } from './app-main/angular_basic/DependencyInjection/product2/product2.component';
import { DeplayoutComponent } from './app-main/angular_basic/DependencyInjection/deplayout/deplayout.component';
import { BsTooltipComponent } from './app-main/angular_material/bs-tooltip/bs-tooltip.component';
import { AngularScssComponent } from './app-main/angular-scss/angular-scss.component';
import { DirectivePipeComponent } from './app-main/angular_basic/directive-pipe/directive-pipe.component';
import { NgxFunctionComponent } from './app-main/ngx-function/ngx-function.component';
import { AngularAnimateComponent } from './app-main/angular-animate-layout/angular-animate/angular-animate.component';
import { NgrxBasicUsingComponent } from './app-main/ngx-function/ngx-basic/ngrx-basic-using/ngrx-basic-using.component';
import { DebouncEventDirective } from './directive/debounc-event.directive';
import { NgxStateStoreComponent } from './app-main/ngx-function/ngx-state-store/ngx-state-store.component';
import { HostUseComponent } from './app-main/mvcH5Css3/host-use/host-use.component';
import { HostChildComponent } from './app-main/mvcH5Css3/host-use/host-child/host-child.component';
import { StarCheckboxComponent } from './app-main/mvcH5Css3/host-use/star-checkbox/star-checkbox.component';
import { H5Css3LayoutComponent } from './app-main/mvcH5Css3/h5-css3-layout/h5-css3-layout.component';
import { NgContentComponent } from './app-main/angular_basic/ng-content/ng-content.component';
import { NgContentChildrenComponent } from './app-main/angular_basic/ng-content/ng-content-children/ng-content-children.component';
import { NgContentExampleComponent } from './app-main/angular_basic/ng-content/ng-content-example/ng-content-example.component';
import { NgContentUnnamedComponent } from './app-main/angular_basic/ng-content/ng-content-unnamed/ng-content-unnamed.component';
import { FormArrayComponent } from './app-main/angular_basic/form/form-array/form-array.component';
import { FormValidatorComponent } from './app-main/angular_basic/form/form-validator/form-validator.component';
import { FormDynamicQuestionnaireComponent } from './app-main/angular_basic/form/form-dynamic-questionnaire/form-dynamic-questionnaire.component';
import { PeekABooComponent } from './app-main/angular_basic/peek-a-boo/peek-a-boo.component';
import { PeekbooDirective } from './app-main/angular_basic/peekboo.directive';
import { SpyComponent } from './app-main/angular_basic/peek-a-boo/spy/spy.component';
import { SpyParentComponent } from './app-main/angular_basic/peek-a-boo/spy-parent/spy-parent.component';
import { AfterViewComponent } from './app-main/angular_basic/peek-a-boo/after-view/after-view.component';
import { ChildComponent } from './app-main/angular_basic/peek-a-boo/child/child.component';
import { AfterContentParentComponent } from './app-main/angular_basic/peek-a-boo/after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './app-main/angular_basic/peek-a-boo/after-content/after-content.component';
import { AppQuestionComponent } from './app-main/angular_basic/form/form-dynamic-questionnaire/app-question/app-question.component';
import { WorkMemberListComponent } from './app-main/angular_basic/work-member-list/work-member-list.component';
import { UploadFileComponent } from './app-main/angular_basic/upload-file/upload-file.component';
import { MaterialLayoutComponent } from './app-main/angular_material/material-layout/material-layout.component';
import { SelfCyclingComponent } from './app-main/angular_basic/self-cycling/self-cycling.component';
import { WpcMenuComponent } from './app-main/angular_basic/self-cycling/wpc-menu/wpc-menu.component';
import { ViewContainerRefComponent } from './app-main/angular_basic/view-container-ref/view-container-ref.component';
import { AngularAnimateLayoutComponent } from './app-main/angular-animate-layout/angular-animate-layout.component';
import { MaterialCdkOverlayComponent } from './app-main/angular_material/overlay/material-cdk-overlay/material-cdk-overlay.component';
import { OverlayPanelComponent } from './app-main/angular_material/overlay/overlay-panel/overlay-panel.component';
import { RemlayoutComponent } from './app-main/rem/remlayout/remlayout.component';
import { LodashCourseComponent } from './app-main/lodash-course/lodash-course.component';
import { CourseComponent } from './app-main/lodash-course/course/course.component';

import { SharedModule } from './app-main/chain_module/shared/shared.module';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { matDialogConfirmService } from './services/mat-dialog.service';
import { SafehtmlPipe } from './pipe/safehtml.pipe';
import { ScrollDirectiveDirective } from './directive/scroll-directive.directive';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { SliceEmailPipe } from './pipe/slice-email.pipe';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { EmailvalidDirective } from './directive/emailvalid.directive';

// primeng modle
// import {FileUploadModule} from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

// CKeditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './app-main/angular_editor/editorLayout';
import { CkeditorComponent } from './app-main/angular_editor/ckeditor/ckeditor.component';
import { CountDownComponent } from './app-main/angular_home/count-down/count-down.component';
import { WpcNg2FileUploadComponent } from './app-main/angular_basic/wpc-ng2-file-upload/wpc-ng2-file-upload.component';
import { EchartLayoutComponent } from './app-main/echart/echart-layout/echart-layout.component';
import { NgxEchartComponent } from './app-main/echart/ngx-echart/ngx-echart.component';
import { ChartOneComponent } from './app-main/echart/chart-one/chart-one.component';
import { ChartTwoComponent } from './app-main/echart/chart-two/chart-two.component';

// import NgxEchartsModule
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { TextLinkComponent } from './app-main/angular_editor/text-link/text-link.component';
import { SimpleQuestionnaireComponent } from './app-main/simpleConvenientImplementQuestion/simpleQuestionnaire/simpleQuestionnaire.component';
import { UniqueKeyComponent } from './app-main/angular_basic/form/unique-key/unique-key.component';
import { NativeTableComponent } from './app-main/angular_basic/form/native-table/native-table.component';
import { FormTableComponent } from './app-main/angular_basic/form/form-table/form-table.component';
import { PreviewDialogComponent } from './app-main/angular_basic/form/form-table/preview-dialog/preview-dialog.component';

registerLocaleData(zh);

@NgModule({
  declarations: [ // 只能声明组件，指令，管道，相当于vue的components（引入组件）
    AppComponent,
    ProductComponent,
    ProductdetailComponent,
    Code404Component,
    AppMenuComponent,
    LifeCycleComponent,
    HomeComponent,
    FormComponent,
    CommunicationComponent,
    LayoutComponent,
    RoutesComponent,
    FuzuluyouOComponent,
    FuzuluyouTComponent,
    ChainLayoutComponent,
    CommonComponentComponent,
    Product1Component,
    Product2Component,
    DeplayoutComponent,
    MultiplePipe,
    FilterPipe,
    SafehtmlPipe,
    BsTooltipComponent,
    AngularScssComponent,
    DirectivePipeComponent,
    NgxFunctionComponent,
    AngularAnimateComponent,
    ScrollDirectiveDirective,
    ClickOutsideDirective,
    SliceEmailPipe,
    DateFormatPipe,
    EmailvalidDirective,
    RemlayoutComponent,
    NgrxBasicUsingComponent,
    DebouncEventDirective,
    NgxStateStoreComponent,
    HostUseComponent,
    HostChildComponent,
    StarCheckboxComponent,
    H5Css3LayoutComponent,
    NgContentComponent,
    NgContentChildrenComponent,
    NgContentExampleComponent,
    NgContentUnnamedComponent,
    FormArrayComponent,
    FormValidatorComponent,
    FormDynamicQuestionnaireComponent,
    PeekABooComponent,
    PeekbooDirective,
    SpyComponent,
    SpyParentComponent,
    AfterViewComponent,
    ChildComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    AppQuestionComponent,
    WorkMemberListComponent,
    UploadFileComponent,
    GithubCorner,
    EditorComponent,
    TextLinkComponent,
    CkeditorComponent,
    CountDownComponent,
    WpcNg2FileUploadComponent,
    EchartLayoutComponent,
    NgxEchartComponent,
    ChartOneComponent,
    ChartTwoComponent,
    SelfCyclingComponent,
    WpcMenuComponent,
    ViewContainerRefComponent,
    AngularAnimateLayoutComponent,
    MaterialCdkOverlayComponent,
    OverlayPanelComponent,
    DirectExtendComponent,
    MaterialLayoutComponent,
    CdkOverlayContainerDirective,
    SimpleQuestionnaireComponent,
    UniqueKeyComponent,
    NativeTableComponent,
    LodashCourseComponent,
    CourseComponent,
    FormTableComponent,
    PreviewDialogComponent
  ],
  entryComponents: [ // 自己封装dialog组件要使用一下这个，否则报错！！！！通过这个配置dialog得对话框内容
    OverlayPanelComponent
  ],
  imports: [ // 运转需要的依赖模块
    BrowserModule, // 必选的浏览器模块
    StoreModule.forRoot({
      count: counterReducer,
      tab: tabReducer
    }), // 注册store
    AppRoutingModule,
    CommonModule,
    FileUploadModule,
    // NgZorroAntdModule,
    FormsModule, // 添加这个可以使用ngModule (模板式表单)
    ReactiveFormsModule, // 添加这个可以使用FormControl(响应式表单)
    HttpClientModule,

    MatTabsModule, // 引入tab
    MatExpansionModule, // 引入panel
    MatIconModule, // 引入icon
    MatFormFieldModule, // 引入formField
    MatInputModule, // 需引入这个，否则报错 mat-form-field must contain a MatFormFieldControl.
    MatNativeDateModule, // 引入下面的datePicker不好使报错，需引入这个是对的
    MatDatepickerModule, // 引入datePicker
    MatCheckboxModule, // 引入checkbox
    MatRadioModule, // 引入单选按钮
    MatDialogModule, // 引入material的dialog
    MatSelectModule, // 引入下拉框option
    MatCardModule, // 引入card
    MatAutocompleteModule, // 引入autocomponent
    MatButtonModule,
    MatGridListModule, // 引入grid
    MatProgressSpinnerModule, // 引入loading
    MatProgressBarModule, // 引入loadingBar
    MatSliderModule, // 引入slider
    MatPaginatorModule, // 引入paginator
    MatTableModule, // 一直也没引入成功报错
    MatSnackBarModule,
    MatTooltipModule, // 测试mat tooltip
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    SharedModule, // shared自己封装的组件要引入使用, (注意要引入SharedModule这个模块，不是单独的小组件！！！！)
    BrowserAnimationsModule, // 动画模块,引入动画,放入最后，避免出现异常
    NzIconModule, // ant icon
    NzUploadModule, // ant 文件上传
    NzTabsModule,
    NzToolTipModule,
    NzFormModule,
    NzRadioModule,
    NzModalModule,
    NzMessageModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzInputModule,
    NzCollapseModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzGridModule,
    ButtonModule,
    MultiSelectModule,
    OverlayModule,
    PortalModule,
    // CKeditor
    CKEditorModule,
    NgxEchartsModule
  ],
  exports: [
    // MatTableModule 一直也没引入成功报错
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    matDialogConfirmService,
    { provide: NZ_I18N, useValue: zh_CN },
    // { provide: RouteReuseStrategy, useClass: AppReuseStrategy } //路由复用暂时不用，此项目路由操作破坏了路由复用
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    // { provide: OverlayContainer, useClass: CdkOverlayContainer }, // 注销掉，否则overlay不好用, 使用下面也没好用，最后直接在指令里 providers了这个类，就ok了
    // { provide: OverlayContainer, useFactory: () => new CdkOverlayContainer(DOCUMENT, new Platform({})) }, 
    // { provide: OverlayContainer, useFactory: () => new AppOverlayContainer(document, Platform) },
  ], // 声明服务，依赖注入
  bootstrap: [AppComponent] // 声明主组件
})

export class AppModule { }
