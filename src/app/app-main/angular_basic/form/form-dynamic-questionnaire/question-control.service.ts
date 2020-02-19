import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
// 可以把问卷问题转换为 FormGroup 的服务。 简而言之，这个 FormGroup 使用问卷模型的元数据，并允许你指定默认值和验证规则。
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    console.log(questions);
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    console.log(group);
    return new FormGroup(group);
  }
  
}
