import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// 用户校验器
export function userNameVaild(control: FormControl):any  {
    console.log(control);
    const userNameReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)(@accenture.com$|@domain.com$)/;
    const mobileVaild = userNameReg.test(control.value);
    console.log(mobileVaild);
    return mobileVaild ? null : {UserMail: true};
}
// 密码校验器
export function passwordVaild(control: FormControl): any {
    console.log(control);
    // const passWordReg = /^[A-Za-z0-9`~!@#$%^&*()-_=+|\\\{};:'",<.>/?\s]{8,20}$/;
    const passWordReg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_]+$)(?![a-z0-9]+$)(?![a-z\\W_]+$)(?![0-9\\W_]+$)[a-zA-Z0-9\\W_]{8,20}$/
    const passwordVaild = passWordReg.test(control.value);
    console.log(passwordVaild);
    return passwordVaild ? null : {userPassword: true};
}
// 确认密码校验器
export function confirmPasswordVaild(group: FormGroup): any {
    console.log(group);
    let password = group.get('passWord') as FormControl;
    let Cpassword = group.get('confirmPassword') as FormControl;
    console.log(password);
    console.log(Cpassword);
    let valid:boolean = (password.value === Cpassword.value);
    console.log(valid);
    // console.log(group.getError('equal'));
    return valid?null:{equal: {errdesc: '密码与确认密码不匹配'}} // 校验器可返回错误信息，避免html硬编码
}
// 验证码校验器
export function captchaVaild(control: FormControl): any {
  console.log(control);
  const captchaReg = /^[A-Za-z0-9]{6}/;
  const captchaVaild = captchaReg.test(control.value);
  console.log(captchaVaild);
  return (captchaVaild && control.value.length===6) ? null : {captchaVaild: true};
}

