import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import { FormControl } from '@angular/forms'
import * as moment from 'moment'
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']

})

export class DatepickerComponent implements OnInit {
  @Input() bindingValue: any
  @Input() disabled = false
  @Output() contentChange
  constructor() {
    this.contentChange = new EventEmitter()
  }

  ngOnInit() {

  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const tmpDate: any = moment(event.value).utc().toDate()
    // this.contentChange.emit(event.value)
    this.contentChange.emit(tmpDate)
    // console.log('date', event)
  }


}
