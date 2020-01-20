import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { addTab, removeTab } from './store/tab-reducer';
import { MenuTab } from './interface/menu';
import { getNameByUrl, getUrlByName } from './utils/tabNameMapping';
import { RemserviceService } from 'src/app/services/remservice.service';
import { HttpServiceService } from './services/http-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // tabs
  tabs$: Observable<MenuTab>
  index = 0;
  tabs = [];
  tabsSubscript: Subscription;
  removeCurrentURl: string = '';
  // 主题
  title = 'My First Angular App!';
  theme = false;
  constructor(
    private store: Store<{tab: MenuTab}>,
    private menu: HttpServiceService,
    private router: Router,
    private routerInfo: ActivatedRoute,
    private remS: RemserviceService) {
      this.tabs$ = this.store.pipe(select('tab')); // 从app.module.ts中获取tab状态流
      if (sessionStorage.getItem('rem') === 'true') {
        this.remS.showrem = true;
      } else {
        this.remS.showrem = false;
      }
      // 监听路由变化
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route) => {
        this.removeCurrentURl = route['urlAfterRedirects']; // 保存当前路径
        console.log(this.removeCurrentURl);
      });
  }

  ngOnInit() {
    this.tabsSubscript = this.tabs$.subscribe((tabs) => {
      this.initTab(tabs);
    });
  }

  ngAfterViewInit() {
    console.log(this.tabs);
  }

  changeToRed(color: any) {
    this.theme = !this.theme;
    const themeWrapper = document.getElementById('theme-wrapper');
    themeWrapper.style.setProperty('--customBackgroundColor', color); // 自定义设置全局颜色
  }

  initTab(storeTabs) {
    // console.log(storeTabs);
    this.tabs = storeTabs.tab;
    // console.log(this.tabs);
    for (let [index, i] of this.tabs.entries()) {
      if (i.isSelect) {
        this.index = index;
        break;
      }
    }
  }

  activeTab(tab) {
    const rootUri = this.getRootUri(tab);
    const currentRoutUrRl = `/${rootUri}/${tab}`;
    if (rootUri === 'Home') {
      this.router.navigate(['home']);
    } else {
      this.router.navigate([currentRoutUrRl]);
    }
    // update store tab
    const tabName = getNameByUrl(currentRoutUrRl);
    const storeTab = {
      url: currentRoutUrRl,
      title: tabName,
      isSelect: true
    };
    this.store.dispatch({ type: addTab, payload: storeTab });
  }

  getRootUri(tab) {
    const list = this.menu.menulist;
    let rootUri = 'Home';
    rootfor:
    for (const key in list) {
      for (const item of list[key]) {
        if (item === tab) {
          rootUri = key;
          break rootfor;
        }
      } 
    }
    return rootUri;
  }

  closeTab(tab: string): void {
    // console.log(tab);
    if (this.tabs.length > 1) {
      this.store.dispatch({ type: removeTab, payload: tab });
    }
  }

}
