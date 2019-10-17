import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-form-dynamic-questionnaire',
  templateUrl: './form-dynamic-questionnaire.component.html',
  styleUrls: ['./form-dynamic-questionnaire.component.scss']
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
    this.questions = this.service.getQuestions();
    console.log(this.questions); 
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
