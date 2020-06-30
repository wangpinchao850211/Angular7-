import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /**
   * 1.在ng2表单中使用ngModel需要注意,必须带有name属性或者使用 [ngModelOptions]=”{standalone: true}”，二选其一。因为ngForm持有通过ngModel指令和name属性为各个元素创建的那些控件，并且监视它们的属性变化，包括有效性。 它还有自己的valid属性，只有当其中所有控件都有效时，它才有效。
    2.使用button时需要注明type类型,未注明类型的button会默认为submit，当你点击一个非提交表单按钮时也会提交表单，所以要注明type=”button”
    form表单元素里使用ngModule需要使用name属性绑定到每个标签，或者设置[ngModelOptions]=”{standalone: true}”
   * */ 
  wpcVar = '';

  formModel:FormGroup = new FormGroup({
    userName: new FormControl(),
    dateRange: new FormGroup({
      from: new FormControl(new Date()),
      to: new FormControl(new Date()),
    }),
    emails: new FormArray([
      new FormControl('wpc84@126.com'),
      new FormControl('wangpinchao_86@163.com')
    ])
  });

  // checkbox校验使用
  checkBoxForm: FormGroup;
  likesArr: string[] = ['喜欢','不喜欢','非常喜欢','超级喜欢','喜欢得不得了'];

  selects: string[] = ['喜欢'];

  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService) {}

  ngOnInit() {
    // checkbox 使用
    this.checkBoxForm = this.fb.group({
      likes: this.fb.array([true, false, false, false, false])
    });

    this.likes.valueChanges.subscribe(values => {
      let selects: string[] = [];
      values.forEach((selected: boolean ,i: number) => {
        selected === true && selects.push(this.likesArr[i])
      });
      this.selects = selects;
    });
  }
  get likes () {
    return this.checkBoxForm.get('likes');
  }
  wpcChange(ev) {
    console.log(ev);
    // js使用正则去掉空格的方法
    console.log(this.wpcVar = ev.target.value.replace(/\s+/g,""));
  }
  ngSubmit(value) { // 模板表单提交值
    console.log(value);
    const param = {
      username: value.userName,
      password: value.passwordsGroup.password
    }
    console.log(param);
    // 进行node后台请求
    this.http.PostPromise('/api/user/login', param)
              .then((res) => {
                console.log(res);
              })
  }
  reativeSubmit() {
    console.log(this.formModel.value);
  }
  addEmail() {
    // this.formModel.get('emails') 这是一个formArray的对象，下面是转成数组的方式
    let emails = this.formModel.get('emails') as FormArray
    emails.push(new FormControl());

  }
}
