import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appEmailvalid]', // 直接在标签上使用即可校验
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailvalidDirective,
    multi: true
  }]
})
export class EmailvalidDirective implements Validator{ // 使用angular自带form校验

  emailPattern: RegExp = new RegExp(/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@accenture\.com$/g);
  errResponse: any = {
    emailvalidator: { valid: false }
  };
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value != null ||
        control.value != undefined) {
      const emails: Array<string> = (control.value.toString()).split(',').map(Function.prototype.call, String.prototype.trim);
      let isValid: boolean = true;
      emails.forEach(address => {
        if (address.match(this.emailPattern) == null ) {
          isValid = false;
        }
      });

      if (isValid) {
        return null;
      } else {
        return this.errResponse;
      }

    } else {
      return this.errResponse;
    }
  }

}
