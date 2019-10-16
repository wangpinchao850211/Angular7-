import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-content-parent',
  template: `
    <app-after-content>
      <app-child></app-child>
    </app-after-content>
  `,
  styleUrls: ['./after-content-parent.component.scss']
})
export class AfterContentParentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
