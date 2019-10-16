import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  nextId: number = 1;
  logmsg$ = new Subject(); 
  constructor() { }
  log(nextId: number, msg:string) {
    this.nextId = nextId;
    const loggs = `appPeekboo #${this.nextId++} ${msg}`;
    setTimeout(() => { // 异步发射信息值，否则父组件渲染时会报checked检测错误
      this.logmsg$.next(loggs);
    },0);
  }
  logIt(msg: string) {
    console.log(msg);
  }
}
