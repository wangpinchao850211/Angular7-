import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RemserviceService } from 'src/app/services/remservice.service';
import { HttpServiceService } from './services/http-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // tabs
  index = 0;
  tabs = [];
  // 主题
  title = 'My First Angular App!';
  theme = false;
  constructor(
    private menu: HttpServiceService,
    private router: Router,
    private routerInfo: ActivatedRoute,
    private remS: RemserviceService) {
    if (sessionStorage.getItem('rem') === 'true') {
      this.remS.showrem = true;
    } else {
      this.remS.showrem = false;
    }
    // 监听路由变化
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route) => {
      console.log('iiiiiiiiii');
      console.log(route['urlAfterRedirects'].split('/').reverse()[0]);

      const currentName = route['urlAfterRedirects'].split('/').reverse()[0];
      if (this.tabs.includes(currentName)) {
        this.index = this.tabs.findIndex(value => value === currentName);
      } else {
        this.tabs.push(currentName);
        console.log(this.tabs);
        this.index = this.tabs.length;
        console.log(this.index);
      }
    })
  }

  ngAfterViewInit() {

    console.log(this.tabs);
  }

  changeToRed(color: any) {
    this.theme = !this.theme;
    const themeWrapper = document.getElementById('theme-wrapper');
    themeWrapper.style.setProperty('--customBackgroundColor', color); // 自定义设置全局颜色
  }

  activeTab(tab) {
    console.log(tab);
    const rootUri = this.getRootUri(tab);
    console.log(rootUri);
    console.log(`/${rootUri}/${tab}`);
    if (rootUri === 'Home') {
      this.router.navigate(['home']);
    } else {
      this.router.navigate([`/${rootUri}/${tab}`]);
    }
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
    if (this.tabs.length > 1) {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    }
  }

}
