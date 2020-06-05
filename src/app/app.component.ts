import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { addTab, removeTab } from './store/tab-reducer';
import { MenuTab } from './interface/menu';
import { getNameByUrl, getUrlByName } from './utils/tabNameMapping';
import { RemserviceService } from 'src/app/services/remservice.service';
import { HttpServiceService } from './services/http-service.service';
import { Router, NavigationEnd, ActivatedRoute, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { WebSocketService } from './services/websocket.service';
import * as FileSaver from 'file-saver'; // 下载pdf

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

  // 监听滚动条滚动
  disabledScrollLoading = false;
  scrollLoading = false;
  oldScrollTop = 0; // 保存旧滚动值以判断滚动方向
  @HostListener('mousewheel', ['$event']) public onScroll = _.debounce(this.dealScroll, 50);

  dealScroll(event: any) {
    if (sessionStorage.getItem('openFilterDialogFlag') == 'true') { return; }
    if (!this.disabledScrollLoading) { // loading whole pages should be disabled
      const clientH = document.documentElement.clientHeight;
      const bodyH = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      console.log(`可以监听到滚动条滚动,该元素的scrollTop：${event.target.scrollTop}`);
      // console.log(event.target);
      if (scrollTop >= this.oldScrollTop && scrollTop != 0) { // scroll ↓
        console.log(`滚动条向下滚动scrollTop:${scrollTop}`);
        if (bodyH - clientH - scrollTop < 60) {
          if (!this.scrollLoading) {
            this.scrollLoading = true;
            // document.documentElement.style.overflowY = 'hidden';
            setTimeout(() => {
              this.scrollToLoad();
            }, 300);
          }
        } else {
          this.scrollLoading = false;
        }
      }
      this.oldScrollTop = scrollTop;
    }
  }

  scrollToLoad() {
    // 加载数据
  }

  constructor(
    private ws: WebSocketService,
    private store: Store<{tab: MenuTab}>,
    private menu: HttpServiceService,
    private router: Router,
    private routerInfo: ActivatedRoute,
    private remS: RemserviceService) {
      // 下载pdf 
      // FileSaver.saveAs(response, "EID" + this.exportId + ".pdf");
      // socket使用
      ws.WSEvent.subscribe(data => {
        // this.loadData()
        // this.loadDataCenter() 执行加载
      });

      this.tabs$ = this.store.pipe(select('tab')); // 从app.module.ts中获取tab状态流
      if (sessionStorage.getItem('rem') === 'true') {
        this.remS.showrem = true;
      } else {
        this.remS.showrem = false;
      }
      // 监听路由变化
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route: NavigationEnd) => {
        this.removeCurrentURl = route['urlAfterRedirects']; // 保存当前路径
        console.log(this.removeCurrentURl);
        console.log(route.url);
        const tree: UrlTree = this.router.parseUrl(route.url);
        console.log(tree);
        // root: UrlSegmentGroup: URL树的根段组
        // queryParams: Params: URL的查询参数
        // fragment: string | null: URL的片段
        // queryParamMap: ParamMap
        const fragment = tree.fragment;
        console.log(fragment);
        const params = this.deSerialize(fragment);
        console.log(params);
      });
  }

  deSerialize(query) {
    const pl = /\+/g  // Regex for replacing addition symbol with a space
    const search = /([^&=]+)=?([^&]*)/g
    const decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')) }
    const obj = {}
    let match = search.exec(query)
    while (match) {
      obj[decode(match[1])] = decode(match[2])
      match = search.exec(query)
    }
    return obj
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
    console.log(this.tabs);
    for (let [index, i] of this.tabs.entries()) {
      if (i.isSelect) {
        this.index = index;
      }
      // 跳转路由
      if (i.isSelect && i.url !== '/home') {
        this.router.navigate([i.url]);
        break;
      }
      if (this.tabs.length === 1 && i.url === '/home') {
        this.router.navigate([i.url]);
        break;
      }
    }
  }

  activeTab(tab) {
    const rootUri = this.getRootUri(tab);
    let currentRoutUrRl = `/${rootUri}/${tab}`;
    // console.log(currentRoutUrRl);
    if (rootUri === 'Home') {
      currentRoutUrRl = '/home';
      this.router.navigate(['home']);
    } else {
      this.router.navigate([currentRoutUrRl]);
    }
    // update store tab, 还是使用保存的url，使用getRootUri生成的与路由不匹配
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
