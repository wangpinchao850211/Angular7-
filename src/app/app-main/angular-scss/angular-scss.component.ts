import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemserviceService } from 'src/app/services/remservice.service';

@Component({
  selector: 'app-angular-scss',
  templateUrl: './angular-scss.component.html',
  styleUrls: ['./angular-scss.component.scss']
})
export class AngularScssComponent implements OnInit {

  constructor(
    private router: Router,
    private remS: RemserviceService
    ) { }

  ngOnInit() {
  }
  goToRem() {
    this.remS.showrem = true; // 显示rem布局组件
    this.router.navigate(['/remlayout']); // 跳转到路由组件方可显示
    // 占时加个session
    sessionStorage.setItem('rem', 'true');
  }

}
