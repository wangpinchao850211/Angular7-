import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-prompt-message',
  templateUrl: './prompt-message.component.html',
  styleUrls: ['./prompt-message.component.css'],
  animations: [
    trigger('showMsg', [
      state('void', style({'opacity': 0 })),
      state('*', style({'opacity': 1})),
      transition(':enter', [
        animate('.3s ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('.3s ease-in-out', style({opacity: 0}))
      ]),
    ])
  ]
})
export class PromptMessageComponent implements OnInit {

  @HostBinding('@showMsg') state;
  @Input('errMsg') errMessage: string;
  constructor() { }

  ngOnInit() {
    console.log(this.errMessage);
  }

}
