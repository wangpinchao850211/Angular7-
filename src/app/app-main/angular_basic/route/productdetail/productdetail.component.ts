import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  routerId: number;
  routeData: string;
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerId = this.routeInfo.snapshot.queryParams["id"]; // 第一种使用queryParams传递参数 (参数快照)
    console.log(this.routerId);

    // 第一种queryParams参数订阅
    this.routeInfo.queryParams.subscribe((params: Params) => {
      console.log(`第一种queryParams参数订阅`);
      console.log(params);
      this.routerId = params.id;
    });

    // 第三种route data参数订阅
    this.routeInfo.data.subscribe((params) => { // 常用这种接收，下面两种不用
      console.log('第三种route data传值方法'); 
      console.log(params);
      this.routeData = params.title;
    });

    // this.routeInfo.paramMap.subscribe((params) => {
    //   console.log('第三种传值方法');
    //   console.log(params);
    // });

    // this.routeInfo.queryParamMap.subscribe((params) => {
    //   console.log('第三种传值方法');
    //   console.log(params);
    // });

  }

}
