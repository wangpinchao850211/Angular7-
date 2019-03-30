import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from '../services/menuservice.service';
import { Menu } from '../interface/menu';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.router.navigate([`/${rootName}/${name}`]);
  }

}
