import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() title: string
  @Input() disabled: boolean
  @Input() invalid: boolean
  @Input() checked: boolean

  @Output() click: EventEmitter<boolean>
  @Output() checkedChange: EventEmitter<boolean>

  constructor() {
    this.click = new EventEmitter()
    this.checkedChange = new EventEmitter()
  }

  ngOnInit() {
    console.log(this.title);
  }

  check_change() {
    this.checked = !this.checked
    this.click.emit(this.checked)
    this.checkedChange.emit(this.checked)
  }
}
