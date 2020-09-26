import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-progresscomponent',
  templateUrl: './progresscomponent.component.html',
  styleUrls: ['./progresscomponent.component.scss']
})
export class ProgresscomponentComponent implements OnInit {

  bufferValue = 75;
  color = 'primary';
  mode = 'determinate';
  value1 = 50;
  value2 = 50;
  strokeWidth = 20; // 没有动态实现宽度更新
  constructor() { }

  ngOnInit() {
  }

  strokeWidthChange(ev) {
    this.value1 = ev; 
  }

}
