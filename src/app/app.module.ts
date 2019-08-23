import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 注册store
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';
// import { MaterialModule } from '@angular/material'; 已经不支持全部导入了
import { MatTabsModule, MatExpansionModule, MatRadioModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatDialogModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatAutocompleteModule, MatGridListModule, MatProgressSpinnerModule, MatSliderModule, MatProgressBarModule, MatPaginatorModule, MatTableModule, MatTooltipModule } from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling'; // package安装完了应该可用
import {CdkTableModule} from '@angular/cdk/table'; 

import { TooltipModule, AccordionModule, CarouselModule, BsDropdownModule, BsDatepickerModule, PaginationModule, TimepickerModule  } from 'ngx-bootstrap';
import { NzIconModule } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { Code404Component } from './code404/code404.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { LifeCycleComponent } from './app-main/angular_basic/life-cycle/life-cycle.component';
import { HomeComponent } from './app-main/angular_home/home/home.component';
import { HerosComponent } from './app-main/angular_basic/heros/heros.component';
import { FormComponent } from './app-main/angular_basic/form/form.component';
import { CommunicationComponent } from './app-main/angular_basic/communication/communication.component';
import { LayoutComponent } from './app-main/layout/layout.component';
import { HerosEditorComponent } from './app-main/angular_basic/heros-editor/heros-editor.component';
import { HeroDetailComponent } from './app-main/angular_basic/hero-detail/hero-detail.component';
import { RoutesComponent } from './app-main/angular_basic/route/routes/routes.component';
import { HerosmessagesComponent } from './app-main/angular_basic/herosmessages/herosmessages.component';
import { HerodashboardComponent } from './app-main/angular_basic/herodashboard/herodashboard.component';
import { FuzuluyouOComponent } from './app-main/angular_basic/route/fuzuluyou-o/fuzuluyou-o.component';
import { FuzuluyouTComponent } from './app-main/angular_basic/route/fuzuluyou-t/fuzuluyou-t.component';
import { ChainLayoutComponent } from './app-main/chain_module/chain-layout/chain-layout.component';
import { CommonComponentComponent } from './app-main/chain_module/common-component/common-component.component';
import { Product1Component } from './app-main/angular_basic/DependencyInjection/product1/product1.component';
import { Product2Component } from './app-main/angular_basic/DependencyInjection/product2/product2.component';
import { DeplayoutComponent } from './app-main/angular_basic/DependencyInjection/deplayout/deplayout.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { MaterialLayoutComponent } from './app-main/angular_material/material-layout/material-layout.component';
import { MaterialComcomponentComponent } from './app-main/angular_material/material-comcomponent/material-comcomponent.component';
import { MaterialCheckboxComponent } from './app-main/angular_material/material-checkbox/material-checkbox.component';
import { SharedModule } from './app-main/chain_module/shared/shared.module';
import { MaterialSelectComponent } from './app-main/angular_material/material-select/material-select.component';
import { MarterialDialogComponent } from './app-main/angular_material/marterial-dialog/marterial-dialog.component';

import { matDialogConfirmService } from './services/mat-dialog.service';
import { SafehtmlPipe } from './pipe/safehtml.pipe';
import { MaterialAutocomponentComponent } from './app-main/angular_material/material-autocomponent/material-autocomponent.component';
import { MaterialGridcomponentComponent } from './app-main/angular_material/material-gridcomponent/material-gridcomponent.component';
import { ProgresscomponentComponent } from './app-main/angular_material/progresscomponent/progresscomponent.component';
import { PaginatorcomponentComponent } from './app-main/angular_material/paginatorcomponent/paginatorcomponent.component';
import { TablecomponentComponent } from './app-main/angular_material/tablecomponent/tablecomponent.component';
import { BsCarouselComponent } from './app-main/angular_material/bs-carousel/bs-carousel.component';
import { BsDatepickerComponent } from './app-main/angular_material/bs-datepicker/bs-datepicker.component';
import { BsDropdownComponent } from './app-main/angular_material/bs-dropdown/bs-dropdown.component';
import { BsPaginationComponent } from './app-main/angular_material/bs-pagination/bs-pagination.component';
import { BsTimepickerComponent } from './app-main/angular_material/bs-timepicker/bs-timepicker.component';
import { BsTooltipComponent } from './app-main/angular_material/bs-tooltip/bs-tooltip.component';
import { AngularScssComponent } from './app-main/angular-scss/angular-scss.component';
import { DirectivePipeComponent } from './app-main/angular_basic/directive-pipe/directive-pipe.component';
import { NgxFunctionComponent } from './app-main/ngx-function/ngx-function.component';
import { AngularAnimateComponent } from './app-main/angular-animate/angular-animate.component';
import { ScrollDirectiveDirective } from './directive/scroll-directive.directive';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { SliceEmailPipe } from './pipe/slice-email.pipe';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { EmailvalidDirective } from './directive/emailvalid.directive';
import { RemlayoutComponent } from './rem/remlayout/remlayout.component';
import { NgrxBasicUsingComponent } from './app-main/ngx-function/ngx-basic/ngrx-basic-using/ngrx-basic-using.component';
import { DebouncEventDirective } from './directive/debounc-event.directive';
import { NgxStateStoreComponent } from './app-main/ngx-function/ngx-state-store/ngx-state-store.component';

registerLocaleData(zh);

@NgModule({
  declarations: [ // 只能声明组件，指令，管道，相当于vue的components（引入组件）
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductdetailComponent,
    Code404Component,
    AppMenuComponent,
    LifeCycleComponent,
    HomeComponent,
    HerosComponent,
    FormComponent,
    CommunicationComponent,
    LayoutComponent,
    HerosEditorComponent,
    HeroDetailComponent,
    RoutesComponent,
    HerosmessagesComponent,
    HerodashboardComponent,
    FuzuluyouOComponent,
    FuzuluyouTComponent,
    ChainLayoutComponent,
    CommonComponentComponent,
    Product1Component,
    Product2Component,
    DeplayoutComponent,
    MultiplePipe,
    FilterPipe,
    MaterialLayoutComponent,
    MaterialComcomponentComponent,
    MaterialCheckboxComponent,
    MarterialDialogComponent,
    MaterialSelectComponent,
    SafehtmlPipe,
    MaterialAutocomponentComponent,
    MaterialGridcomponentComponent,
    ProgresscomponentComponent,
    PaginatorcomponentComponent,
    TablecomponentComponent,
    BsCarouselComponent,
    BsDatepickerComponent,
    BsDropdownComponent,
    BsPaginationComponent,
    BsTimepickerComponent,
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
  ],
  entryComponents:[ // 自己封装dialog组件要使用一下这个，否则报错！！！！通过这个配置dialog得对话框内容
      MarterialDialogComponent
  ],
  imports: [ // 运转需要的依赖模块
    BrowserModule, // 必选的浏览器模块
    StoreModule.forRoot({ count: counterReducer }), // 注册store
    AppRoutingModule,
    NgZorroAntdModule,
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
    MatTooltipModule, // 测试mat tooltip
    // ScrollingModule // 没有引用CDK到项目中！！！
    SharedModule, // shared自己封装的组件要引入使用, (注意要引入SharedModule这个模块，不是单独的小组件！！！！)
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule, // 动画模块,引入动画,放入最后，避免出现异常
    NzIconModule, // ant icon
  ],
  exports: [
    // ScrollingModule // 没有引用CDK到项目中！！！
    CdkTableModule,
    // MatTableModule 一直也没引入成功报错
  ],
  providers: [matDialogConfirmService, { provide: NZ_I18N, useValue: zh_CN }], // 声明服务，依赖注入
  bootstrap: [AppComponent] // 声明主组件
})

export class AppModule { }
