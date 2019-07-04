import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective, BsDatepickerConfig, BsDatepickerViewMode,  } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
// import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker'; 没有这个东西啊，待深入
@Component({
  selector: 'app-bs-datepicker',
  templateUrl: './bs-datepicker.component.html',
  styleUrls: ['./bs-datepicker.component.scss']
})
export class BsDatepickerComponent implements OnInit {
  bsInlineValue = new Date();
  colorTheme = 'theme-dark-blue'; // 可直接定义这六种颜色，配置到containerClass，填入到bsConfig即可
 
  bsConfig: Partial<BsDatepickerConfig>;
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([new Date(), new Date()])
  });
  minDate: Date;
  maxDate: Date;
  disabledDates = [
    new Date('2019-02-05'),
    new Date('2019-02-09')
  ];
  // 设置成显示年的形式
  bsValue: Date = new Date(2017, 7);
  minMode: BsDatepickerViewMode = 'month';
  @ViewChild('dp') datepicker: BsDaterangepickerDirective;
  dateCustomClasses: any;
  constructor() {
    // 设置最大最小日期
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, minMode : this.minMode }); // 初始设置为深蓝色, 设置为年
    // 设置颜色日期
    const now = new Date();
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(now.getDate() + 2);
    const fourDaysAhead = new Date();
    fourDaysAhead.setDate(now.getDate() + 4);
    this.dateCustomClasses = [
      { date: now, classes: [] },
      { date: twoDaysAhead, classes: ['bg-warning'] },
      { date: fourDaysAhead, classes: ['bg-danger', 'text-warning'] }
    ];
  }
  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, customTodayClass: 'custom-today-class' });
    // 可以设置当前选中天的样式
    setTimeout(() => {
      pop.show();
    });
  }

  // 可以设置最小日期
  setOptions(): void {
    this.bsConfig = Object.assign({}, { minDate: this.minDate });
    this.datepicker.setConfig();
 
    setTimeout(() => {
      this.datepicker.toggle();
    });
  }
  // 日期方法
  handler(value: string): void {}
  onValueChange(value: Date): void {
    console.log(value);
  }

}
