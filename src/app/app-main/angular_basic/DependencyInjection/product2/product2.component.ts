import { Component, OnInit, Injector } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.sass'],
  providers: [{
    provide: ProductService, useClass: AnotherProductService
  }]
})
export class Product2Component implements OnInit {

  product: Product

  private productService: ProductService
  // constructor(private productService: ProductService) { // 这种事常规注入方法，另一种是将注入器直接注入到构造函数 }
  constructor(private injector: Injector) { // 这种是将注入器直接注入到这个组件的构造函数，再使用注入器请求ProductService服务
    this.productService = this.injector.get(ProductService)
  }

  ngOnInit() {
    this.product = this.productService.getProduct()
    console.log(this.product)
  }

}
