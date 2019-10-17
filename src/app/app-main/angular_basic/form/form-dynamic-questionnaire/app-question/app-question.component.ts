import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup } from '@angular/forms';

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
    // console.log(this.question.key);
    // console.log(this.form);
    // console.log(this.form.controls[this.question.key].valid);
    return this.form.controls[this.question.key].valid; 
  }
  constructor() { }

  ngOnInit() {
  }
  choose(val) {
    console.log(val);
    // 手动触发设置form值
    this.form.patchValue({
      [this.question.key]: val,
    });
  }

}
