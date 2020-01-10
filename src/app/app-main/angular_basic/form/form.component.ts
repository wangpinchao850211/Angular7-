import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  wpcVar = '';

  formModel:FormGroup = new FormGroup({
    userName: new FormControl(),
    dateRange: new FormGroup({
      from: new FormControl(new Date()),
      to: new FormControl(new Date()),
    }),
    emails: new FormArray([
      new FormControl('wpc84@126.com'),
      new FormControl('wangpinchao_86@163.com')
    ])
  });

  constructor() {}

  ngOnInit() {
  }
  wpcChange(ev) {
    console.log(ev);
    // js使用正则去掉空格的方法
    console.log(this.wpcVar = ev.target.value.replace(/\s+/g,""));
  }
  ngSubmit(value) { // 模板表单提交值
    console.log(value);
  }
  reativeSubmit() {
    console.log(this.formModel.value);
  }
  addEmail() {
    // this.formModel.get('emails') 这是一个formArray的对象，下面是转成数组的方式
    let emails = this.formModel.get('emails') as FormArray
    emails.push(new FormControl());
  }
}
