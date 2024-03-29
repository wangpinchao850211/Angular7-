import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  // TextboxQuestion 可以通过 type 属性来支持多种 HTML5 元素类型，比如文本、邮件、网址等。
  type: string;
  textDependency: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    // console.log(options);
    // this.type = options['type'] || ''; input type类型可以通过数据来进一步控制
    if (options['Dependency']) {
      // console.log(options['Dependency'][0]['FrontFormula']);
      this.textDependency = options['Dependency'];
    }
  }
}
