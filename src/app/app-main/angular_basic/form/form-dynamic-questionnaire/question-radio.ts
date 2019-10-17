import { QuestionBase } from './question-base';

export class AadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  // AadioQuestion 只有一种类型, 可以不适用type
  // type: string;

  constructor(options: {} = {}) {
    super(options);
  }
}