import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-form-dynamic-questionnaire',
  templateUrl: './form-dynamic-questionnaire.component.html',
  styleUrls: ['./form-dynamic-questionnaire.component.scss'],
  // 我去，这个问题太溜了！！，将QuestionService只提供到这个组件，不提供到providedIn: 'root'，就解决表单重复加载问题！！！
  providers: [QuestionService]
})
// 是表单的主要容器和入口点。
export class FormDynamicQuestionnaireComponent implements OnInit {

  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(
    private qcs: QuestionControlService,
    private service: QuestionService) { }

  ngOnInit() {
    this.questions = this.service.getFieldType();
    console.log(this.questions); 
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
