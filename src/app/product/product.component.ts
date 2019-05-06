import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private routerId: number;
  private keyWord: string;
  private titleFilter: FormControl = new FormControl();
  private products: Array<Product>;
  constructor(
    private routeInfo: ActivatedRoute
  ) {
    // 输入框值发生变化触发这个valueChanges事件，订阅
    this.titleFilter.valueChanges
    .pipe(debounceTime(500))
    .subscribe(
      (value) => {
        console.log(value);
        this.keyWord = value;
      }
    );
  }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.4,"慕课网angular实战", ["电子商品", "硬件设备"]),
      new Product(2, "第二个商品", 2.99, 3.5,"慕课网angular实战", ["硬件设备"]),
      new Product(3, "第三个商品", 3.99, 2.4,"慕课网angular实战", ["电子图书", "硬件设备"]),
      new Product(4, "第四个商品", 4.99, 2.0,"慕课网angular实战", ["电子商品"]),
      new Product(5, "第五个商品", 5.99, 4.4,"慕课网angular实战", ["电子商品", "硬件设备"]),
      new Product(6, "第六个商品", 6.99, 1.4,"慕课网angular实战", ["电子商品", "硬件设备"]),
    ]
    // this.routerId = this.routeInfo.snapshot.params["id"]; // 这种是参数快照的方法，当此组件已被渲染，路由传参变化时并不会触发重新复制的过程，需要是用如下的参数订阅的方法
    this.routeInfo.params.subscribe((param: Params) => this.routerId = param['id']) // 可以查看传递不同参数依然可以实现页面的变更. 注意：这种一般处理特殊的情况，如自身组件跳转到自身，会出现组件不会渲染，但是参数变化的现象
    console.log(this.routerId)
  }

}

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) {

  }
}
