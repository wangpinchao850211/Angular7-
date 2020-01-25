import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.scss']
})
export class CommonComponentComponent implements OnInit {

  public tooltipList = [
    {
      id: 0,
      content: '这是第一tooltip块'
    },
    {
      id: 1,
      content: '这是第二tooltip块'
    },
    {
      id: 2,
      content: '这是第三tooltip块'
    },
    {
      id: 3,
      content: '这是第四tooltip块'
    },
    {
      id: 4,
      content: '这是第五tooltip块'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
