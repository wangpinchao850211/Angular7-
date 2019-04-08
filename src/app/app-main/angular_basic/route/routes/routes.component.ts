import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToProductdetail() {
    this.router.navigate(['/AngularBasic/routers/product', 2]); // 传递了不同的参数，可在接受组件product进行查看
  }
}
