import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay, share } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ThirdpartService {

  public SetPassword$ = new BehaviorSubject('');
  constructor() {}

  changeSetPassword(val) {
    this.SetPassword$.next(val);
  }

  onChangeSetPassword(): Observable<any> {
    return this.SetPassword$.pipe(
      share()
    );
  }
}
