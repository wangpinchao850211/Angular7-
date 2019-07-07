import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My First Angular App!';
  @HostListener('window:scroll', ['$event'])
  onScroll = ($event) => {
    console.log($event);
    //客户端高度
    var clientH = document.documentElement.clientHeight;
    //body高度
    var bodyH = document.body.clientHeight;

    //滚动的高度
    var scrollTop = document.documentElement.scrollTop;
    console.log(bodyH)
  }
  @HostListener('scroll', ['$event'])
  onscroll(event: any) {
    console.log(event);
  }
  @HostListener('mousewheel', ['$event'])
  onmousewheel(event: any) {
    console.log(event.target.scrollHeight);
    if (event.target.scrollHeight > 0) {
      console.log(event.target); // 无法找到滚动条存在的元素
    }
  }
  constructor() {}

}
