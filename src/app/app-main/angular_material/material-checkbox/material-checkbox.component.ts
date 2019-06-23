import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material' // 引入主题

@Component({
  selector: 'app-material-checkbox',
  templateUrl: './material-checkbox.component.html',
  styleUrls: ['./material-checkbox.component.scss']
})
export class MaterialCheckboxComponent implements OnInit {

  checked = false;
  title = '自己封装checkbox';
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  public color:ThemePalette = 'primary'; // 引入主题，终于实现，牛逼牛逼！修改颜色了，不过好像就三种 primary accent， warn
  constructor() { }

  ngOnInit() {
  }
  change() {
    // check change方法
  }
  checkedChange() {
    // 自己封装的传出方法
    console.log('自己封装的传出change方法');
  }
  click() {
    console.log('自己封装的传出click方法');
  }
  radioFocus() {
    this.color = 'warn'; // 点击单选按钮，将单选和checkbox1的颜色都改为warn
    console.log(this.color);
  }
  radioChange() {
    console.log(this.labelPosition);
  }
  ngModelChange() { // 单选radio-group change事件，属于事件冒泡，先是上面方法先触发，然后再触发这里
    console.log(this.labelPosition);
  }
}
