import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wpc-message',
  template: `
    <div id="container">
      弹出消息
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host>>>.container{
      width: 200px;
      height: 42px;
      line-height: 42px;
      position: fixed;
      right: 40px;
      top: 80px;
      background: greenyellow;
      border-radius: 6px;
      text-align: center;
    }
    :host>>>.show {
      display: block;
    }
    :host>>>.hidden {
      display: none;
    }
  `]
})
export class WpcMessageComponent implements OnInit {

  public config: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.config);
  }

}
