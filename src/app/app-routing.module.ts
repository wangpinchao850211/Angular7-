import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './app-main/layout/layout.component';
import { HomeComponent } from './app-main/angular_home/home/home.component';
import { LifeCycleComponent } from './app-main/angular_basic/life-cycle/life-cycle.component';
import { HerosComponent } from './app-main/angular_basic/heros/heros.component';
import { RoutesComponent } from './app-main/angular_basic/route/routes/routes.component';
import { FormComponent } from './app-main/angular_basic/form/form.component';
import { CommunicationComponent } from './app-main/angular_basic/communication/communication.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { Code404Component } from './code404/code404.component';
import { from } from 'rxjs';

const routes: Routes = [
  // Main redirect
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
    // redirectTo: '/heros',可使用空路径实现默认组件的应用
    children: [
      { path: '', component: LifeCycleComponent},
      { path: 'lifecycle', component: LifeCycleComponent },
      { path: 'heros', component: HerosComponent },
      { path: 'routers',
        component: RoutesComponent,
        children: [
          {path:'product/:id', component: ProductComponent},
          {path:'productdetail', component: ProductdetailComponent}, // 传递参数直接在routerLink增加参数即可
        ]
      },
      { path: 'communication', component: CommunicationComponent },
      { path: 'form', component: FormComponent },
    ]
  },
  // Handle all other routes
  {path: '**', component: Code404Component} // 一定要放在路由的最后面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
