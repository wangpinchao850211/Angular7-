import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 每当新组件实例化之后，路由出口就会发出一个激活事件；在销毁时则发出取消激活的事件。
  onActivate(event) { // 可观察到加载哪个组件
    console.log(event)
  }

  onDeactivate(event) { // 可观察到销毁哪个组件
    console.log(event)
  }
}
