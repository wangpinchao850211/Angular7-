import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  // DropdownQuestion 表示一个带可选项列表的选择框。  
  options: {key: string, value: string}[] = []; 

  constructor(options: {} = {}) {
    super(options);
    console.log(options['options']);
    this.options = options['options'] || [];
  }

}
