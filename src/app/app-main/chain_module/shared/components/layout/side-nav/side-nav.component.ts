import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core'
import { Router } from '@angular/router'
import { SideNavPath, SideNavType } from '../../../shared'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  @Input() isDisable: Boolean = false
  @Input() userType: any = ''
  @Input() companyNb: any = ''
  @Input() onBoardingStatus: Boolean = false
  @Output() cancelEvent = new EventEmitter()
  @ViewChild('side_Nav') side_Nav: ElementRef
  sideNavPath = SideNavPath
  sideNavType = SideNavType
  get side_navHeight() {
    return document.getElementById('footerHeight').offsetTop - document.getElementById('headerBar').offsetHeight + 'px'
  }
  constructor(private router: Router) { }
  ngOnInit() {
  }

  backTo(value) {
    const type = this.sideNavType[value]
    const param = this.sideNavPath[this.userType + '_' + type]
    const action = (Array.from(this.actions())).filter(item => new RegExp(item[0]).test(this.userType + '_' + type))
    action[0][1].call(this, param)
    // this.actions().forEach((v, k) => {
    //   if (new RegExp(k).test(this.userType + '_' + type)) {
    //     if (param) { v.call(this, param) }
    //   }
    // }, this.actions())
  }
  actions() {
    const NavigateTo = (path) => {
      this.cancelEvent.emit()
      if (path) { this.router.navigate([path]) }
    }
    const NavigateTo_1 = (path) => {
      this.cancelEvent.emit()
      if (path && this.companyNb) { this.router.navigate([path + this.companyNb]) }
    }
    return new Map([
      [/^supplier_[14]$/, NavigateTo_1],
      [/^supplier_[2-3]$/, NavigateTo],
      [/^buyer_[1-3]$/, NavigateTo],
      [/^buyer_[4]$/, NavigateTo_1]
    ])
  }
  cancel() {
    this.cancelEvent.emit()
  }
  @HostListener('document: click', ['$event'])
  documentClick(evt) {
    if (this.side_Nav && this.side_Nav.nativeElement.contains(event.target)) {
      return
    }
    if (evt.target.lastChild && evt.target.lastChild.data && evt.target.lastChild.data.trim() === 'Back to ...' ) {
      return
    }
    this.cancel()
  }
}
