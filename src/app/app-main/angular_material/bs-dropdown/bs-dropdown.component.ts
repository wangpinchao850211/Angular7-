import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-dropdown',
  templateUrl: './bs-dropdown.component.html',
  styleUrls: ['./bs-dropdown.component.scss']
})
export class BsDropdownComponent implements OnInit {

  public disabled:boolean;
  constructor() { }

  ngOnInit() {
  }
  downToggle(dropdown) {
    console.log(dropdown);
    dropdown.toggle(true);
  }
  downShow(dropdown) {
    dropdown.show();
  }
  downHide(dropdown) {
    dropdown.hide();
  }
  DisableOrE() {
    this.disabled = !this.disabled;
  }
  onOpenChange(data: boolean): void {
    console.log(data);
  }

}
