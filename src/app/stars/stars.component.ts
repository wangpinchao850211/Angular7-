import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() private rating:number = 0; // 接收父级的星评数值
  constructor() { }

  ngOnInit() {
    console.log(this.rating);
    console.log(Math.round(this.rating));
  }

  talk() {
    console.log('告诉父级');
  }
}
