import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, FormControl } from '@angular/forms';
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
  ],
  imports: [ // 运转需要的依赖模块
    BrowserModule, // 必选的浏览器模块
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule, // 添加这个可以使用ngModule
    FormControl,
    HttpClientModule,
    BrowserAnimationsModule // 路由模块
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }], // 声明服务，依赖注入
  bootstrap: [AppComponent] // 声明主组件
})
export class AppModule { }
