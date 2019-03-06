import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path:'home', component: AppComponent},
  {path:'product', component: ProductdetailComponent},
  {path:'**', component: Code404Component} // 一定要放在路由的最后面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
