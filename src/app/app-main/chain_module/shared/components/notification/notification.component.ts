import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  @Input() type = 'info'    // || 'flash_on'
  @Input() message = ''
  @Output() clickEvent: EventEmitter<any>

  constructor() {
    this.clickEvent = new EventEmitter()
  }

  ngOnInit() {

  }

  click() {
    if (!!this.clickEvent) {
      this.clickEvent.emit()
    }
  }

}
