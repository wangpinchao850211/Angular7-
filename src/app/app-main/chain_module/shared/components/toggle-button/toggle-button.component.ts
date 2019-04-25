import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.sass']
})
export class ToggleButtonComponent implements OnInit {

  @Input() public label: string
  @Input() public isChecked: boolean
  @Input() public isDisabled: boolean
  @Input() public isWhiteColor = false

  check = false

  @Input()
  get checked() {
    return this.check
  }
  set checked(val) {
    this.check = val
    this.checkedChange.emit(this.check)
  }

  @Output() checkedChange
  @Output() change

  constructor() {
    this.checkedChange = new EventEmitter()
    this.change = new EventEmitter()
  }

  ngOnInit() {

  }

  changed() {
    this.change.emit()
  }

}
