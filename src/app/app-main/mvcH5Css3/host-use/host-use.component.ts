import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-use',
  templateUrl: './host-use.component.html',
  styleUrls: ['./host-use.component.scss']
})
export class HostUseComponent implements OnInit {

  showDiffClass = false;
  Status = 'Y';
  constructor() { }

  ngOnInit() {
  }

}
