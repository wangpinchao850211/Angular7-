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
    /**
     * 现在这种结构，目前是考虑在这个位置来控制依赖关系的显示隐藏 （有待考虑，结合数据这一块，如何处理为好，尤其是显示隐藏）
     * 第一步：将有被依赖关系的字段设置标记，这些表单的触发告诉外层，也就是这个组件，传出来order和当前的值
     * 第二步：通过这两个值对着符合依赖关系的，去掉原数据的值，达到隐藏作用，不符合显示原数据
     * */ 

    this.questions = this.service.getFieldType();
    // console.log(this.questions); 
    this.form = this.qcs.toFormGroup(this.questions);
    // console.log(this.form);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
