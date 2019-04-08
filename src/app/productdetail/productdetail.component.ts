import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    this.routerId = this.routeInfo.snapshot.queryParams["id"]; // 第一种使用queryParams传递参数
    // this.routerId = this.routeInfo.snapshot.params["id"]; // 第二种使用params传递参数(挪到product组件里了)
    // 注意第一种和第二种的区别是，第一种并不改变路径，第二种是改变路径的
    console.log(this.routerId)
  }

}
