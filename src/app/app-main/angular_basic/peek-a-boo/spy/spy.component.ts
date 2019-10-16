import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.scss']
})
export class SpyComponent implements OnInit {

  @Input() heroes;
  constructor() { }

  ngOnInit() {
    // console.log(this.heroes);
  }

}
