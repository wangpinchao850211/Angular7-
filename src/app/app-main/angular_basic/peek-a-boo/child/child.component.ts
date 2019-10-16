import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <input [(ngModel)]="hero">
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  hero = 'Magneta';
  constructor() { }

  ngOnInit() {
  }

}
