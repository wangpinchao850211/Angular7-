import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <p>我是dialog的content</p>
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .container{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      height: 100%
    }
  `]
})
export class WpcDialogComponent implements OnInit {

  @Input() wpc: string;
  constructor() { }

  ngOnInit() {
    console.log(this.wpc);
  }

}
