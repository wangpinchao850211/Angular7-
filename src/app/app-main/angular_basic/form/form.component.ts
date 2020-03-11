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
