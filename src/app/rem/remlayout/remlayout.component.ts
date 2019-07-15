import { Component, OnInit } from '@angular/core';

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
  contentWidth: string = `1000px`;
  contentHeight: string = `500px`;
  contentPadding: string = `20px`;
  contentMargin: string = `30px`;
  constructor() { }

  ngOnInit() {
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
