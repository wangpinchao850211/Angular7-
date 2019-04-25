import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() public text = ''
  @Input() public isDisabled = false
  @Input() public isPrimary = true
  @Input() public isPrimaryGray = false
  @Input() public isSecondary = false
  @Input() public isTransparent = false
  @Input() public isPrimaryLight = false
  @Input() public isWhite = false
  @Input() public icon = ''
  @Input() public iconPosition = 'left'
  @Input() public weight = '700'

  constructor() {
  }

  ngOnInit() {
  }

  buttonClick() {
    if (this.isDisabled) {
      event.stopPropagation()
    }
  }
}
