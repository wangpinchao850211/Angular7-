import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-comcomponent',
  templateUrl: './material-comcomponent.component.html',
  styleUrls: ['./material-comcomponent.component.scss']
})
export class MaterialComcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 3;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  openAll() {
    console.log('iiiiiiii');
  }
  closeAll() {
    console.log('eeeeeeeeeee');
  }
  closed() {
    console.log('rrrrrr');
  }
}
