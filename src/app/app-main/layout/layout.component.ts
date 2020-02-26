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

  onActivate(event) { // 可观察到加载哪个组件
    console.log(event)
  }

  onDeactivate(event) { // 可观察到销毁哪个组件
    console.log(event)
  }
}
