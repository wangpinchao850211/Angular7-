import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
// 可以把问卷问题转换为 FormGroup 的服务。 简而言之，这个 FormGroup 使用问卷模型的元数据，并允许你指定默认值和验证规则。
export class QuestionControlService {

  constructor(private fb: FormBuilder) { }

  checkListVaild(control: FormArray): any {
    // console.log(control.value);
    // 自定义formArray验证器，但是这个验证器是在formArray中每个formControl上都执行了一边，有待优化
    let Vaild = false;
    if (control.value.includes(true)) {
      Vaild = true;
    }
    return Vaild ? null : {checkVaild: true};
  }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    
    // console.log(questions);
    questions.forEach(question => {
      if (question.controlType !== 'CheckBox') {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
      } else {
        // checkbox 添加成formArray
        let arr = []; 
        question['checkOption'].forEach(ele => {
          arr.push(ele.OptionResponse.ResponseCheck);
        });
        // 添加自定义验证器
        group[question.key] = question.required ? this.fb.array(arr, this.checkListVaild) : this.fb.array(arr);
      }
    });
    // console.log(group);

    return new FormGroup(group);
  }
  
}
