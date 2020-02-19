/*
  根据 QuestionService 返回的对象来控制英雄的工作申请表。 要维护这份问卷，只要非常简单地添加、修改和删除 questions 数组中的对象就可以了。
*/

import { Injectable, OnInit } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { AadioQuestion } from './question-radio';
import { HttpServiceService } from 'src/app/services/http-service.service';
import * as _ from 'lodash';
import { DataSource } from './DataSource';
import { questionType } from './questionInterface';
import { CheckBoxQuestion } from './question-checkbox';

// 我去，这个问题太溜了！！，将QuestionService只提供到使用组件，不提供到providedIn: 'root'，就解决表单重复加载问题！！！
// @Injectable({
//   providedIn: 'root'
// })

export class QuestionService implements OnInit {

  public questionSource: any = [];
  constructor(
  ) {}
  ngOnInit(): void {
    console.log(DataSource.simpleQuestionData);
  }

  // TODO: 使用异步获取远程数据
  getQuestion(item) {
    let currentService = null;
    switch (item.type) {
      case 1:
        // currentService = new DateQuestion();
        break;
      case 2:
        currentService = new DropdownQuestion(item);
        break;
      case 3:
      // currentService = new TypeAheadQuestion();
        break;
      case 4:
        currentService = new TextboxQuestion(item);
        break;
      case 5:
      // currentService = new UploadButtonQuestion();
        break;
      case 6:
      // currentService = new TextareaQuestion();
        break;
      case 7:
      currentService = new CheckBoxQuestion(item);
        break;
      case 8:
        currentService = new AadioQuestion(item);
        break;
      case 9:
      // currentService = new MultipleSelectQuestion();
        break;
      case 10:
      // currentService = new LabelQuestion();
        break;
      case 11:
      // currentService = new ButtonQuestion();
        break;
      case 12:
      // currentService = new LinkQuestion();
        break;
      default:
        break;
    }
    return currentService;

    let questions: QuestionBase<any>[] = [
 
      /*
        问题点一、
          <div *ngFor="let question of questions" class="form-row">
            <app-question [question]="question" [form]="form"></app-question>
          </div>
          这里使用一个通用组件来渲染不同的表单控件，当表单控件比较多和复杂时候，不太通用了，所以app-question应是一个插槽组件，让外部插入要渲染的表单， pp-question组件使用了ngSwitchCase，所以就是所有控件写到这里，逻辑会变异常复杂，具体控件应由service类封装。
        问题点二、
          DataSource是quertionnaier的整体数据结构，使用Reflect保持数据操作统一为原始对象，由service创建数据实例，会打散整体表单数据（需要处理），另外涉及到不同的表单控件，需要在每个service有自己的控件封装，综合这两点，异步表单使用指令是优选的，下面可以深入研究每个控件的封装特点，优化着手于数据处理这一块！！
      */ 
      new DropdownQuestion(),
 
      new TextboxQuestion(),
 
      new TextboxQuestion(),

      new AadioQuestion(),

    ];
    
  }

  getFieldType() {
    const questionSource = DataSource.simpleQuestionData.sections;
    console.log(questionSource.length);
    for (let index = 0; index < questionSource.length; index++) {
      const field = questionSource[index];
      this.questionSource.push(this.getQuestion(field));
    }
    
    console.log(this.questionSource);
    // return this.questionSource;
    return this.questionSource.sort((a, b) => a.order - b.order);
  }

}
