import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { addTab, removeTab } from '../../store/tab-reducer';
import { wpcMenu, MenuTab } from '../../interface/Menu';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { getNameByUrl } from 'src/app/utils/tabNameMapping';
// 使用material自定义方式引入svg icon实现！
import { MatIconRegistry } from '@angular/material/icon'; 
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private store: Store<{tab: MenuTab}>,
    private router: Router,
    private http: HttpServiceService,
    private MatIconRegistry: MatIconRegistry,
    private DomSanitizer: DomSanitizer
  ) {
    this.tabs$ = this.store.pipe(select('tab')); // 从app.module.ts中获取tab状态流
    MatIconRegistry.addSvgIcon('accentureIconnName', DomSanitizer.bypassSecurityTrustResourceUrl('assets/images/menu.svg'));
  }

  ngOnInit() {
    // 通过http请求菜单列表, Menu是定义数据类型（描述返回的数据结构）
    console.log(this.http.configUrl); // 看来全局数据要储存到service里
    this.http.getMenu().subscribe(
      (data: wpcMenu) => {
        console.log(data);
        this.angularMenu = [...Object.keys(data)];
        this.angularMenuObj = { ...data };
        console.log(this.angularMenu);
      },
      (error) => this.error = error // error path
    );
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goToHomePage() {
    // 点击左侧，在app.component里的逻辑有个bug，home页会不跳转(其实执行逻辑有问题，需要触发store来实现)
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
