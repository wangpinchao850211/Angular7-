import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-scss',
  templateUrl: './angular-scss.component.html',
  styleUrls: ['./angular-scss.component.scss']
})
export class AngularScssComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }
  goToRem() {
    this.router.navigate(['/remlayout']); // 跳转到路由组件方可显示
  }

}
