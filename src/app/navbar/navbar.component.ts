import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    console.log(document.getElementsByClassName('miniList')[0]);
    this.isCollapsed = !this.isCollapsed;
  }
}
