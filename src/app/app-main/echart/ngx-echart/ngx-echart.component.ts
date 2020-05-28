import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-echart',
  templateUrl: './ngx-echart.component.html',
  styleUrls: ['./ngx-echart.component.scss']
})
export class NgxEchartComponent implements OnInit {

  width = '100%';
  constructor() { }

  ngOnInit() {
  }

  changeWidth(ev: Event) {
    this.width = this.width === '100%' ? '80%' : '100%';
  }
}
