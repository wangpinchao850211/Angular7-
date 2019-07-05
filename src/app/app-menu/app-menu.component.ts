import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from '../services/menuservice.service';
import { Menu } from '../interface/menu';
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

  constructor(
    // private menu: MenuserviceService
    private router: Router,
    private http: HttpServiceService
  ) { }

  ngOnInit() {
    console.log(Menu);
    this.angularMenu = [...Object.keys(Menu)];
    this.angularMenuObj = { ...Menu };
    console.log(this.angularMenu);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  menuClick(rootName, name) {
    console.log(rootName);
    console.log(name);
    // 同a标签使用routerLink参数相同
    // loading start
    this.http.loading();
    setTimeout(() => {
      this.router.navigate([`/${rootName}/${name}`]);
      this.http.loading();
      // loading end
    },1000)
  }

}
