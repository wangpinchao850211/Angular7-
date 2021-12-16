import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-checkbox',
  templateUrl: './star-checkbox.component.html',
  styleUrls: ['./star-checkbox.component.scss']
})
export class StarCheckboxComponent implements OnInit {

  @Input() title: string
  @Input() disabled: boolean
  @Input() invalid: boolean
  @Input() checked: boolean

  @Output() checkedChange: EventEmitter<boolean>
  
  constructor() {
    this.checkedChange = new EventEmitter()
  }

  ngOnInit() {
  }

  check_change() {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }

}
