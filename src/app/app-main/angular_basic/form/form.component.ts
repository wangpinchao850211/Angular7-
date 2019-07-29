import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


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
  // 自定义手机号,密码校验器
  mobileVaild(control: FormControl):any  {
    let myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let mobileVaild = myreq.test(control.value);
    console.log(mobileVaild);
    // 校验通过不返回任何值，否则返回一个对象（mobile是hasError返回的key）
    return mobileVaild ? null : {mobile: true};
    // 校验器可以作为异步校验器，使用如下，然后将新的校验器名填入formValidModel使用对应字段的第三个参数
    // return of(mobileVaild ? null : {mobile: true}).pipe(delay(1000));
  }
  passwordVaild(group: FormGroup): any { // 注意groupVaild使用加入的位置
    let password = group.get('passwordValid') as FormControl;
    let Cpassword = group.get('confirmPasswordValid') as FormControl;
    // console.log(password);
    // console.log(Cpassword);
    let valid:boolean = (password.value === Cpassword.value);
    console.log(valid);
    return valid?null:{equal: {errdesc: '密码与确认密码不匹配'}} // 校验器可返回错误信息，避免html硬编码
  }

  // 表单校验模型
  formValidModel:FormGroup;
  constructor(fb: FormBuilder) {
    // angular 校验器应用
    // formbuilder
    // 有三个方法,对应三个类 fb.group({})  fb.control({}) fb.array({})
    this.formValidModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      mobile: ['', this.mobileVaild],
      passwordGroup: fb.group({
        passwordValid: ['', Validators.minLength(8)],
        confirmPasswordValid: [''],
      }, {validators: this.passwordVaild}) // 注意使用添加位置
    })
  }

  ngOnInit() {
  }
  ngSubmit(value) {
    console.log(value);
  }
  reativeSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    // this.formModel.get('emails') 这是一个formArray的对象，下面是转成数组的方式
    let emails = this.formModel.get('emails') as FormArray
    emails.push(new FormControl());
  }
  onSubmit() {
    console.log(this.formValidModel.value);
    // 校验器应用
    let isValid:boolean = this.formValidModel.get('username').valid;
    console.log(isValid);
    let error:any = this.formValidModel.get('username').errors
    console.log(JSON.stringify(error));
  }
}
