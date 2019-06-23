import { Component, OnInit } from '@angular/core';
import { matDialogConfirmService } from 'src/app/services/mat-dialog.service';

@Component({
  selector: 'app-material-comcomponent',
  templateUrl: './material-comcomponent.component.html',
  styleUrls: ['./material-comcomponent.component.scss']
})
export class MaterialComcomponentComponent implements OnInit {

  constructor(public confirm: matDialogConfirmService) { }

  ngOnInit() {
  }

  step = 4;

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
  openDialog() {
    this.confirm.confirm({
        Content: '<b>Are you sure you want to remove this<br> &prime;Supporting Requester&prime;?</b>',
        buttons: ['YES', 'NO'],
        Title: '',
    }).subscribe(res => {
        console.log(res);
    });
  }
}
