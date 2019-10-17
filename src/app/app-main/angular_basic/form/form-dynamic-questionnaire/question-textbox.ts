import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  // TextboxQuestion 可以通过 type 属性来支持多种 HTML5 元素类型，比如文本、邮件、网址等。
  type: string;

  constructor(options: {} = {}) {
    super(options);
    console.log(options['type']);
    this.type = options['type'] || '';
  }
}
