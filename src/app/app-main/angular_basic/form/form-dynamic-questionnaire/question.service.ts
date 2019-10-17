/*
  根据 QuestionService 返回的对象来控制英雄的工作申请表。 要维护这份问卷，只要非常简单地添加、修改和删除 questions 数组中的对象就可以了。
*/

import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { AadioQuestion } from './question-radio';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor() { }
  // TODO: 使用异步获取远程数据
  getQuestions() {
    let questions: QuestionBase<any>[] = [
 
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
 
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        type: 'text',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new AadioQuestion({
        key: 'male',
        label: '是否为男性',
        // value: false, // 默认为没选中
        required: true,
        order: 4
      })

    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}
