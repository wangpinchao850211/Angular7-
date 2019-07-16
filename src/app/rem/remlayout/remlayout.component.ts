import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-remlayout',
  templateUrl: './remlayout.component.html',
  styleUrls: ['./remlayout.component.scss']
})
export class RemlayoutComponent implements OnInit {

  public tabs = [
		{ id: 1, title: 'menu1', active: true },
		{ id: 2, title: 'menu2', active: false },
		{ id: 3, title: 'menu3', active: false },
		{ id: 4, title: 'menu4', active: false },
		{ id: 5, title: 'menu5', active: false },
		{ id: 6, title: 'menu6', active: false },
    { id: 7, title: 'menu7', active: false }
  ];
  contentWidth: string;
  contentHeight: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentMarginLeft: string;
  contentMarginRight: string;
  contentMarginTop: string;
  contentMarginBottom: string;
  contentMargin: string;
  @HostListener('window:resize')
  onWindowResize() {
     this.getStryle();
  }
  constructor() { }

  ngOnInit() {
    this.getStryle();
  }

  getStryle() {
    const desc = <HTMLElement>document.getElementsByClassName('content-describe')[0];
    // console.log(desc.offsetWidth);
    // console.log(desc.offsetHeight);
    // 直接desc.style.marginLeft 获取不到，要获取渲染完后的样式使用getComputedStyle
    // console.log(window.getComputedStyle(desc,null).marginLeft);
    // console.log(window.getComputedStyle(desc,null).marginTop);
    // console.log(window.getComputedStyle(desc,null).marginRight);
    // console.log(window.getComputedStyle(desc,null).marginBottom);
    // console.log(window.getComputedStyle(desc,null).paddingLeft);
    // console.log(window.getComputedStyle(desc,null).paddingTop);
    // console.log(window.getComputedStyle(desc,null).paddingRight);
    // console.log(window.getComputedStyle(desc,null).paddingBottom);
    this.contentWidth = `${desc.offsetWidth}px`;
    this.contentHeight = `${desc.offsetWidth}px`;
    this.contentPaddingLeft = window.getComputedStyle(desc,null).paddingLeft;
    this.contentPaddingRight = window.getComputedStyle(desc,null).paddingRight;
    this.contentPaddingTop = window.getComputedStyle(desc,null).paddingTop;
    this.contentPaddingBottom = window.getComputedStyle(desc,null).paddingBottom;
    this.contentMarginLeft = window.getComputedStyle(desc,null).marginLeft;
    this.contentMarginTop = window.getComputedStyle(desc,null).marginTop;
    this.contentMarginRight = window.getComputedStyle(desc,null).marginRight;
    this.contentMarginBottom = window.getComputedStyle(desc,null).marginBottom;
  }

  menuclick(i) {
    this.tabs.forEach((item) => {
      item.active = false;
    })
    this.tabs.filter((s) => {
      if(s.id === i.id) s.active = true;
    })
  }
}
