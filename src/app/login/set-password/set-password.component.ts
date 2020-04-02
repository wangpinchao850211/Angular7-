import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThirdpartService } from '../thirdpart.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { throwIfEmpty, delay } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { userNameVaild, passwordVaild, confirmPasswordVaild } from '../thirdpartvaild';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit, OnDestroy {

  private service: any;

  public SetPasswordUnscrib: Subscription;
  public pwFlag = true; 
  public formTitle = 'Set New Password';
  public setPasswordForm: FormGroup;
  public submitBtnContent = 'Change Password';

  constructor(
    private routeInfo: ActivatedRoute,
    private setPs: ThirdpartService,
    private fb: FormBuilder,
  ) {

    this.SetPasswordUnscrib = this.setPs.onChangeSetPassword().subscribe((falg) => {
      console.log(falg);
      console.log(this.pwFlag);
      if (falg === 'R-Pw') {
        this.pwFlag = false;
        this.formTitle = 'Reset-Password';
        this.submitBtnContent = 'Send Activation Link';
      } else if (falg === 'F-Pw') {
        this.pwFlag = true;
      }
      console.log(this.pwFlag);
    });

  }

  getControl(name) {
    return this.setPasswordForm.controls[`${name}`];
  }

  asyncVaild(control: FormControl) {
    // 进行异步验证
    console.log(control);
    return Rx.of(null).pipe(delay(1000));
  }

  ngOnInit() {
    // this.routeInfo.queryParams.subscribe((params: Params) => {
    //   console.log(params);
    // });
    this.formInit();
    console.log(this.formTitle);
    this.setPasswordForm.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.setPasswordForm.valid);
      console.log(this.setPasswordForm.errors);
      console.log(this.setPasswordForm.hasError('equal')); // hasError可传单参数
      console.log(this.setPasswordForm.status);
      console.log(this.setPasswordForm.get('oldpassWord').pending);
    });
  }

  formInit() {
    if (this.pwFlag) {
      this.setPasswordForm = this.fb.group({
        userEmail: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
        passWord: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
        confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])), 
      }, {validators: confirmPasswordVaild} );
    } else {
      this.setPasswordForm = this.fb.group({
        userEmail: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
        oldpassWord: ['', passwordVaild, this.asyncVaild],
        // oldpassWord: ["", { validators: [ passwordVaild, this.asyncVaild], updateOn: "blur" }],
        passWord: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
        confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
      }, {validators: confirmPasswordVaild });
    }
  }

  setValidator(name, valid) {
    console.log(valid);
    console.log(name);
    if (valid) return;
    this.setPasswordForm.controls[`${name}`].setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(40)]);
    this.setPasswordForm.controls[`${name}`].updateValueAndValidity();
    const currentUserNameValid = this.setPasswordForm.get(`${name}`).valid;
    
  }
  
  setPasswordSubmit(loginForm, ev: Event) {
    const {value, valid} = loginForm;
    console.log(value);
    console.log(valid);
    // 开始校验
    ev.preventDefault();
    if (!valid) {
      return;
    }

      this.setPasswordForm.controls['userEmail'].setValidators(userNameVaild);
      this.setPasswordForm.controls['passWord'].setValidators(passwordVaild);
      this.setPasswordForm.controls['confirmPassword'].setValidators(passwordVaild);
      
      this.setPasswordForm.controls['userEmail'].updateValueAndValidity();
      this.setPasswordForm.controls['passWord'].updateValueAndValidity();
      this.setPasswordForm.controls['confirmPassword'].updateValueAndValidity();
      const currentUserNameValid = this.setPasswordForm.get('userEmail').valid;
      const currentPassWordValid = this.setPasswordForm.get('passWord').valid;
      const currentconfirmPasswordValid = this.setPasswordForm.get('confirmPassword').valid;
      console.log(currentUserNameValid);
      console.log(currentPassWordValid);
      console.log(currentconfirmPasswordValid);
    if (!this.pwFlag) { // 多设置一个formControl校验
      // this.setPasswordForm.controls['oldpassWord'].setValidators(this.asyncVaild);
      // this.setPasswordForm.controls['oldpassWord'].updateValueAndValidity();
      // const currentoldpassWordValid = this.setPasswordForm.get('oldpassWord').valid;
      // console.log(currentoldpassWordValid);
      if (currentUserNameValid && currentPassWordValid && currentconfirmPasswordValid) {
        console.log('校验通过');
        // 进行重置密码请求
        // this.service.resetPassword(this.setPasswordForm.value).then((res) => {
        //   console.log(res);
        // });
      } else {
        console.log('校验未通过');
      }
    } else if (this.pwFlag) {
      if (currentUserNameValid && currentPassWordValid && currentconfirmPasswordValid) {
        console.log('校验通过');
        // 设置新密码ajax请求
        // this.service.creatNewPassword(this.setPasswordForm.value).then((res) => {
        //   console.log(res);
        // });
      } else {
        console.log('校验未通过');
      }
    }
  }

  ngOnDestroy() {
    this.SetPasswordUnscrib.unsubscribe();
  }

}
