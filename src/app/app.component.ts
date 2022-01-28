import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store'; // 导入store并使用
import { addTab, removeTab } from './store/tab-reducer';
import { MenuTab } from './interface/menu';
import { getNameByUrl, getUrlByName } from './utils/tabNameMapping';
import { HttpServiceService } from './services/http-service.service';
import { Router, NavigationEnd, ActivatedRoute, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { WebSocketService } from './services/websocket.service';
import * as FileSaver from 'file-saver'; // 下载pdf
// import { AppReuseStrategy } from './services/RouteReuseStrategy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // tabs
  tabs$: Observable<MenuTab>
  index = 0;
  tabs = [];
  tabsSubscript: Subscription;
  removeCurrentURl: string = '';
  // 主题
  theme = false;
  // 显示questionnaire，使用了一下localStorage的自定义事件监听
  isShowQuestion: string = 'oldValue';
  // 监听滚动条滚动
  disabledScrollLoading = false;
  scrollLoading = false;
  oldScrollTop = 0; // 保存旧滚动值以判断滚动方向
  @HostListener('mousewheel', ['$event']) public onScroll = _.debounce(this.dealScroll, 50);

  dealScroll(event: any) {
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

  @HostListener('window:beforeunload', ['$event'])
  onWindowReload(ev: Event) {
    // console.log(ev);
    // 拦截禁止routers刷新
    if (this.removeCurrentURl.includes('routers')) {
      // ev.returnValue = false;
      // ev.preventDefault();
      return false;
    } else {
      return true;
    }

  }

  constructor(
    private ws: WebSocketService,
    private store: Store<{tab: MenuTab}>,
    private menu: HttpServiceService,
    private router: Router,
    private routerInfo: ActivatedRoute) {
      // 下载pdf 
      // FileSaver.saveAs(response, "EID" + this.exportId + ".pdf");
      // socket使用
      ws.WSEvent.subscribe(data => {
        // this.loadData()
        // this.loadDataCenter() 执行加载
      });
      this.tabs$ = this.store.pipe(select('tab')); // 从app.module.ts中获取tab状态流
      // 监听路由变化
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route: NavigationEnd) => {
        this.removeCurrentURl = route['urlAfterRedirects']; // 保存当前路径（刷新在这个位置，可以接受到刷新前的路径，在init中添加store）
        console.log(this.removeCurrentURl);
        // sessionStorage.setItem('currentUrl', this.removeCurrentURl);
        if ( !(this.removeCurrentURl.includes('product') || this.removeCurrentURl.includes('LodashCourse'))) {
          this.freshInitTab(); // 刷新添加tab
        } else { // routers 不让刷新了，刷新就只跳home页，因为routers里的路由逻辑和刷新冲突
          // 直接用刷新方法控制，拦截如果是routers路由里
        }

        // console.log(route.url);
        const tree: UrlTree = this.router.parseUrl(route.url);
        // console.log(tree);
        // root: UrlSegmentGroup: URL树的根段组
        // queryParams: Params: URL的查询参数
        // fragment: string | null: URL的片段
        // queryParamMap: ParamMap
        const fragment = tree.fragment;
        // console.log(fragment);
        const params = this.deSerialize(fragment);
        // console.log(params);
      });

      // 刷新页面保留current url (开始用session存储的，后来routerInfo也获取到了(在上部)，原因是authService写法导致了路由的乱套，正常写是会保持原路径的刷新！！！)
      // const currentUrl = this.routerInfo.snapshot['_routerState'].url;
      // const currentUrl = sessionStorage.getItem('currentUrl');

      // 监听questionnaire组件跳转出来，实现模拟路由切换
      window.localStorage.setItem('questionnaireStorage', this.isShowQuestion);
      window.addEventListener('setItemEvent', (e) => {
        this.isShowQuestion = e['newValue'];
      })
  }

  // 用空格替换加法符号的正则表达式
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

  freshInitTab() {
    // 这种导致有个整体逻辑上的bug，就是点击菜单，路由不会跳转到home页，只能点击tab的home
    if ( this.removeCurrentURl && this.removeCurrentURl !== '/home') {
      const tabName = getNameByUrl(this.removeCurrentURl);
      console.log(tabName);
      const storeTab = {
        url: this.removeCurrentURl,
        title: tabName,// 包括路由里product，就不进行添加tab, 默认添加routers
        isSelect: true
      };
      console.log(storeTab);
      this.store.dispatch({ type: addTab, payload: storeTab });
    }
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
      }
      // 跳转路由
      if (i.isSelect && i.url !== '/home') {
        // this.router.navigate([i.url]); // 破坏了路由复用的机制，暂时不用路由复用了，需要整体路由结构重构
        break;
      }
      // 将下面代码一注销掉，就能正常获取到路由刷新的路径 (原因1：)
      // close时，省最后一个没跳转路径 （原因2：出现close tab 问题，处理方式在close方法里执行了！！）
      // if (this.tabs.length === 1 && i.url === '/home') {
      //   this.router.navigate([i.url]);
      //   break;
      // }
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

  closeTab(tab): void {
    // console.log(tab);
    if (this.tabs.length > 1) {
      this.store.dispatch({ type: removeTab, payload: tab });
      // AppReuseStrategy.deleteRouteSnapshot(tab.url); 破坏了路由复用的机制，暂时不用路由复用了，需要整体路由结构重构
      // 将initTab中的close省最后一个跳转路径逻辑放这里，实现不与刷新冲突！！！（最终解决方式）
      if (this.tabs.length === 1 && this.tabs[0].url === '/home') { // 会走完store，之后才会走到这
        this.router.navigate(['/home']);
      }
    }
  }

  goToQuestionnaire() {
    // 注意必须要使用localStorage实现，sessionStoreage不好使
    this.isShowQuestion = 'newValue';
    window.localStorage.setItem('questionnaireStorage', this.isShowQuestion);
    // 模拟路由跳转
    const newState = {
      url: window.location.origin + '/simpleQuestionnaire',
      title: document.title,
      state: 'question'
    };
    console.log(newState);
    window.history.pushState(newState, '', '/simpleQuestionnaire');
  }

}
