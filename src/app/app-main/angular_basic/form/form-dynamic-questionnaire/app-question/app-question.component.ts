import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './app-question.component.html',
  styleUrls: ['./app-question.component.scss']
})
// 请注意，这个组件能代表模型里的任何问题类型。目前，还只有两种问题类型，但可以添加更多类型。可以用 ngSwitch 决定显示哪种类型的问题。
export class AppQuestionComponent implements OnInit {

  radioValue: '';
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { 
    return this.form.controls[this.question.key].valid; 
  }
  get checkboxControl() {
    return this.form.get(this.question.key) as FormArray;
  }

  constructor() { }

  ngOnInit() {
    // console.log(this.question);

    // console.log(this.form);
    // console.log(this.form.controls[this.question.key]);
    // console.log(this.form.get(this.question.key));
  }

  choose(val) {
    console.log(val);
    // 手动触发设置form值
    this.form.patchValue({
      [this.question.key]: val,
    });
  }

}
