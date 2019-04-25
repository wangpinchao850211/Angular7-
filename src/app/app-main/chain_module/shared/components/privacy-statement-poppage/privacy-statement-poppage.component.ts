import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core'

@Component({
  selector: 'app-privacy-statement-poppage',
  templateUrl: './privacy-statement-poppage.component.html',
  styleUrls: ['./privacy-statement-poppage.component.sass']
})
export class PrivacyStatementPoppageComponent implements OnInit {
  @Input() footerLink: String
  @Output() acceptEvent: EventEmitter<boolean>
  @ViewChild('acceptScroll') acceptScroll: ElementRef

  acceptButtonDisabled: boolean
  buttonDisabled: boolean

  constructor() {
    this.acceptEvent = new EventEmitter()
  }

  ngOnInit() {
    this.acceptButtonDisabled = false
    this.buttonDisabled = true
  }
  @HostListener('scroll', ['$event'])
  onscroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 100) {
      this.acceptButtonDisabled = true
    } else {
      this.acceptButtonDisabled = false
    }
  }

  acceptModal(flag): void {
    if (flag === 'close') {
      this.acceptEvent.emit(false)
    } else if (flag === 'accept') {
      this.acceptEvent.emit(true)
    }
  }

}
