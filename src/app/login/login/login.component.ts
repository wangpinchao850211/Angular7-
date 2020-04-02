import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThirdpartService } from '../thirdpart.service';
import { userNameVaild, passwordVaild, captchaVaild } from '../thirdpartvaild';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private service: any;

  public loginForm: FormGroup;
  public captchaContent: string = '获取验证码';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private setPs: ThirdpartService,
    private storage: AuthService
  ) {
  }
  
  getControl(name) {
    return this.loginForm.controls[`${name}`];
  }

  ngOnInit() {
    this.formInit();
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.loginForm.valid);
    });
    console.log(this.loginForm.valid);
  }

  formInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
      passWord: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])),
      captcha: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  showCountDown() {
    let times = 60;
    this.captchaContent = `${times}s`;
    const timer = setInterval(() => {
      console.log(times);
      if (times > 0) {
        times--;
        this.captchaContent = `${times}s`;
      } else {
        this.captchaContent = '获取验证码';
        clearInterval(timer);
      }
    }, 1000);
  }

  getCaptcha() {
    console.log('获取验证码');
    // 进行获取验证码ajax请求
    // this.service.getCaptcha(this.loginForm.get('userName')).then((res) => {
    //   console.log(res);
    // });
    setTimeout(() => {
      this.showCountDown();
    }, 1000);
  }

  setValidator(name, valid) {
    console.log(valid);
    console.log(name);
    if (valid) return;
    // this.loginForm.controls[`${name}`].setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(40)]);
    // this.loginForm.controls[`${name}`].updateValueAndValidity();
    // const currentUserNameValid = this.loginForm.get(`${name}`).valid;
    // console.log(currentUserNameValid);
    console.log(this.loginForm.valid);
  }
  
  login(loginForm, ev: Event) {
    const {value, valid} = loginForm;
    console.log(value);
    console.log(valid);
    // 开始校验
    ev.preventDefault();
    if (!valid) {
      return;
    }
    // 自定义验证器也可以不在上面初始化时声明，可以在submit时动态设置使用,如下:
    this.loginForm.controls['userName'].setValidators(userNameVaild);
    this.loginForm.controls['passWord'].setValidators(passwordVaild);
    this.loginForm.controls['captcha'].setValidators(captchaVaild);
    this.loginForm.controls['userName'].updateValueAndValidity({onlySelf: true, emitEvent: true});
    this.loginForm.controls['passWord'].updateValueAndValidity({onlySelf: true, emitEvent: true});
    this.loginForm.controls['captcha'].updateValueAndValidity({onlySelf: true, emitEvent: true});
    const currentUserNameValid = this.loginForm.get('userName').valid;
    const currentPassWordValid = this.loginForm.get('passWord').valid;
    const currentcaptchaValid = this.loginForm.get('captcha').valid;
    console.log(currentUserNameValid);
    console.log(currentPassWordValid);
    console.log(currentcaptchaValid);
    let error:any = this.loginForm.get('userName').errors
    console.log(JSON.stringify(error));
    if (currentUserNameValid && currentPassWordValid && currentcaptchaValid) {
      console.log('校验通过');
      console.log(this.loginForm.value);
      // 模拟进行ajax请求
      // this.service.login(this.loginForm.value).then((res) => {
      //   console.log(res);
      //   const resToken = '返回token';
      //   this.storage.resolveToken(resToken);
      // });
    }
  }

  goToSetPw(falg) {
    this.setPs.changeSetPassword(falg);
    // this.router.navigate(['/setPassword'], {queryParams: {key: falg}});
    this.router.navigate(['/setPassword']);
  }
  goToActivation() {
    this.router.navigate(['/activation'], {queryParams: {email: 'qihuan.wang@domain.com'}});
  }
}
