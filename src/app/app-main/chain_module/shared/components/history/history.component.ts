import { Component, OnInit, Input } from '@angular/core'
import * as moment from 'moment'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  @Input() historyList: any

  constructor() { }

  ngOnInit() {
  }
  downloadFile(url) {
    window.open(url, '_blank')
}
}
