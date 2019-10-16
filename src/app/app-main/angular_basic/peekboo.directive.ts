import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appPeekboo]'
})
export class PeekbooDirective implements OnInit, OnDestroy {

  get nextId() {
    return this.logger.nextId;
  };
  constructor(private logger: LoggerService) { }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    this.logger.log(this.nextId, msg);
  }

}
