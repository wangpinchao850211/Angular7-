import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
  controlType = 'CheckBox';
  checkOption: {key: string, value: string}[] = []; 
  public question;

  constructor(options: {} = {}) {
    super(options);
    console.log(options);
    console.log(this.question);
    this.checkOption = options['checkOption'] || [];
  }

}
