import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  routerId: number
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerId = this.routeInfo.snapshot.queryParams["id"]; // 第一种使用queryParams传递参数 (参数快照)
    // queryParams参数订阅
    this.routeInfo.queryParams.subscribe((params: Params) => {
      console.log(`queryParams参数订阅`);
      console.log(params);
    });

    this.routeInfo.paramMap.subscribe((params) => {
      console.log('第三种传值方法');
      console.log(params);
    });

    this.routeInfo.data.subscribe((params) => {
      console.log('第三种传值方法');
      console.log(params);
    });

    this.routeInfo.queryParamMap.subscribe((params) => {
      console.log('第三种传值方法');
      console.log(params);
    });

    let paramsRouterId = this.routeInfo.snapshot.params["id"]; // 第二种使用params传递参数(挪到product组件里了)

    // 注意第一种和第二种的区别是，第一种并不改变路径，第二种是改变路径的
    console.log(this.routerId);

    console.log(paramsRouterId); // 使用routerLink数组中的参数获取，所以未undefined
  }

}
