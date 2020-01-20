import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { addTab, removeTab } from '../store/tab-reducer';
import { Menu, menu, MenuTab } from '../interface/Menu';
import { getNameByUrl } from '../utils/tabNameMapping';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  // add tabs
  tabs$: Observable<MenuTab>
  isCollapsed = false;

  angularMenuObj = {};
  angularMenu = [];

  // 接收错误请求信息
  error: any;

  @Input() theme: boolean;

  @HostListener('scroll', ['$event'])
  onscroll(event: any) {
    console.log(event);
  }
  constructor(
    private store: Store<{tab: MenuTab}>,
    private router: Router,
    private http: HttpServiceService
  ) {
    this.tabs$ = this.store.pipe(select('tab')); // 从app.module.ts中获取tab状态流
  }

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
    // console.log(rootName);
    // console.log(name);
    // 同a标签使用routerLink参数相同
    const currentRoutUrRl = `/${rootName}/${name}`;
    console.log(currentRoutUrRl);
    this.router.navigate([currentRoutUrRl]);
    // 添加store tab
    const tabName = getNameByUrl(currentRoutUrRl);
    const storeTab = {
      url: currentRoutUrRl,
      title: tabName,
      isSelect: true
    };
    this.store.dispatch({ type: addTab, payload: storeTab });
  }

}
