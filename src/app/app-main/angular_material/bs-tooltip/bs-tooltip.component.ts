import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-tooltip',
  templateUrl: './bs-tooltip.component.html',
  styleUrls: ['./bs-tooltip.component.scss']
})
export class BsTooltipComponent implements OnInit {

  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  contentMouseenterClick: string = 'enter or click to show';
  constructor() { }

  ngOnInit() {
  }

}
