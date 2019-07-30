import { Component, OnInit, HostListener } from '@angular/core';
import { MenuserviceService } from '../services/menuservice.service';
import { Menu, menu } from '../interface/Menu';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  isCollapsed = false;

  angularMenuObj = {};
  angularMenu = [];

  // 接收错误请求信息
  error: any;


  @HostListener('scroll', ['$event'])
  onscroll(event: any) {
    console.log(event);
  }
  constructor(
    // private menu: MenuserviceService
    private router: Router,
    private http: HttpServiceService
  ) { }

  ngOnInit() {
    // 通过http请求菜单列表, Menu是定义数据类型（描述返回的数据结构）
    console.log(this.http.configUrl); // 看来全局数据要储存到service里
    this.http.getMenu().subscribe(
      (data: Menu) => {
        console.log(data);
        this.angularMenu = [...Object.keys(data)];
        this.angularMenuObj = { ...data };
        console.log(this.angularMenu);
      },
      (error) => this.error = error // error path
    );
    console.log(menu); // 导出的是json
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  menuClick(rootName, name) {
    console.log(rootName);
    console.log(name);
    // 同a标签使用routerLink参数相同
    // loading start
    // this.http.loading();
    setTimeout(() => {
      this.router.navigate([`/${rootName}/${name}`]);
      // this.http.loading();
      // loading end
    },1000)
  }

}
