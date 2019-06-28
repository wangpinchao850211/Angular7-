import { Component, OnInit } from '@angular/core';
import { matDialogConfirmService } from 'src/app/services/mat-dialog.service';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material' // 引入主题

@Component({
  selector: 'app-material-comcomponent',
  templateUrl: './material-comcomponent.component.html',
  styleUrls: ['./material-comcomponent.component.scss']
})
export class MaterialComcomponentComponent implements OnInit {

  public selectedItem = new FormControl(1);
  tabs = ['First', 'Second', 'Third'];
  public colorToggle:ThemePalette = 'accent';
  public backgroundColorToggle:ThemePalette = 'primary';
  constructor(public confirm: matDialogConfirmService) { }

  ngOnInit() {
  }

  step = 11;

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
  addTab(checked) {
    console.log(checked);
    this.tabs.push('New');

    // console.log(this.selectedItem);
    if (checked) {
      // 可实现添加时，直接设置值进行tab的切换 ： 重点！！！
      this.selectedItem.setValue(this.tabs.length - 1);
    }
    // console.log(this.selectedItem);
  }
  removeTab(i) {
    this.tabs.splice(i, 1);
  }
  tabChange(e) {
    console.log(e);
  }
}
