import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  birthday: Date = new Date()
  pi: number = 3.1415926
  size: number = 9
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

  currentHtmlValue: string = '';
  currentDomValue: string = '';
  constructor() { }

  ngOnInit() {
  }
  doOnInput(event) {
    console.log(event.target.value); // dom 属性是变化的，指的是当前的值
    console.log(event.target.getAttribute('value')); // html属性指的是初始化的值，初始化后不会改变
    this.currentDomValue = event.target.value;
    this.currentHtmlValue = event.target.getAttribute('value');
  }

}
