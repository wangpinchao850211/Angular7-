import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
  controlType = 'CheckBox';
  checkOption: {key: string, value: string}[] = []; 

  constructor(options: {} = {}) {
    super(options);
    // console.log(options);
    this.checkOption = options['checkOption'] || []; // 必须在这要接一下传来的数据，组件和formControl才能获取到数据
  }

}
