import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-pipe',
  templateUrl: './directive-pipe.component.html',
  styleUrls: ['./directive-pipe.component.scss']
})
export class DirectivePipeComponent implements OnInit {

  public clickOutsideInputValue: string;
  public showUl = false;
  public arr = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.arr.push(index);
      
    }
  }
  ngModelChange(value) {
    console.log(value);
    console.log(this.clickOutsideInputValue);
    if (this.clickOutsideInputValue.trim().length > 0) {
      this.showUl = true;
    } else {
      this.showUl = false;
    }
  }

  setInfo() {
    
  }
}
