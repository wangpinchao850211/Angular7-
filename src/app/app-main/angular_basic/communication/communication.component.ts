import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  panels = [
    {
      active: true,
      name: 'dom bind & html bind',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  doOnInput(event) {
    console.log(event.target.value) // dom 属性是变化的，指的是当前的值
    console.log(event.target.getAttribute('value')) // html属性指的是初始化的值，初始化后不会改变
  }

}
