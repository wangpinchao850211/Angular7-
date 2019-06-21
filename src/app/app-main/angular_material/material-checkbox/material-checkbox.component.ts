import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-checkbox',
  templateUrl: './material-checkbox.component.html',
  styleUrls: ['./material-checkbox.component.scss']
})
export class MaterialCheckboxComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor() { }

  ngOnInit() {
  }
  change() {
    // check change方法
  }

}
