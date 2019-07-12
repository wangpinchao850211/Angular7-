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
  onClickOutside(event: any) { // 接受指令传出的emit对象
    console.log(event);
    if (!event.value) {
      this.showUl = false; // 实现下拉框关闭（再input fcous时或者click时可以打开，关闭）
    }
  }
  asyncClick() {
    setTimeout(() => {
      console.log('执行完毕指令');
      this.showUl = !this.showUl; // 完美实现打开关闭
    })
  }
  changecontentHeight(event) {
    console.log(event);
    if (event) { // 如果太大，调小高度, 并去掉滚动条
      this.arr = this.arr.slice(0, 30);
      console.log(this.arr);
    }
  }
}
