import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, UrlTree } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private routerEventDestroy = null; // use this identifier to clear router.events (observable),存放返回路由订阅者
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) {
    this.routerEventDestroy = router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        console.log(event);
        // NavigationEnd 表示当导航成功结束时触发的事件。extends RouterEvent. 
        // 三个参数(id: number, url: string, urlAfterRedirects: string)
        console.log(event.url);
        const tree: UrlTree = this.router.parseUrl(event.url);
        console.log(tree);
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
  }

  goToProductdetail() {
    this.router.navigate(['/AngularBasic/routers/product', 2]); // 传递了不同的参数，可在接受组件product进行查看
  }
  navigateTransQueryParams() {
    this.router.navigate(['/AngularBasic/routers/productdetail'], {queryParams: {id: 1}, relativeTo: this.routeInfo})
  }
}
