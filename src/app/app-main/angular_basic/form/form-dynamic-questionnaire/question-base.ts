/*
    使用QuestionBase基类，派生出两个新类 TextboxQuestion 和 DropdownQuestion，分别代表文本框和下拉框。
    这么做的初衷是，表单能动态绑定到特定的问卷问题类型，并动态渲染出合适的控件。
*/
export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
   
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }
    
}
