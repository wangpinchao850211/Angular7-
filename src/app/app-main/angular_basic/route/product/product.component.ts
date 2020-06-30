import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private routerId: number;
  constructor(
    private routeInfo: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.routerId = this.routeInfo.snapshot.params["id"]; // 这种是参数快照的方法，当此组件已被渲染，路由传参变化时并不会触发重新复制的过程，需要是用如下的参数订阅的方法
    this.routeInfo.params.subscribe((param: Params) => {
      this.routerId = param['id'];
      console.log(`路由定义参数传递`);
      console.log(this.routerId);
    }); // 可以查看传递不同参数依然可以实现页面的变更. 注意：这种一般处理特殊的情况，如自身组件跳转到自身，会出现组件不会渲染，但是参数变化的现象
    
  }

}

