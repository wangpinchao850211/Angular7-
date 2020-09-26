import { Component, OnInit } from '@angular/core';
import { matDialogConfirmService } from 'src/app/services/mat-dialog.service';
import { FormControl } from '@angular/forms';
import { ThemePalette, TooltipPosition } from '@angular/material' // 引入主题


@Component({
  selector: 'app-material-comcomponent',
  templateUrl: './material-comcomponent.component.html',
  styleUrls: ['./material-comcomponent.component.scss']
})
export class MaterialComcomponentComponent implements OnInit {

  public selectedItem = new FormControl(1); // 传入参数是初始值设定
  tabs = ['First', 'Second', 'Third'];
  public colorToggle:ThemePalette = 'accent';
  public backgroundColorToggle:ThemePalette = 'primary';
  public disabled = true;
  // bs start
  groups = [
    {
      title: 'carousel',
      content: 'carousel'
    },
    {
      title: 'dropdown',
      content: 'dropdown'
    },
    {
      title: 'datepicker',
      content: 'datepicker'
    },
    {
      title: 'timepicker',
      content: 'timepicker'
    },
    {
      title: 'pagination',
      content: 'pagination'
    },
    {
      title: 'tooltip',
      content: 'tooltip'
    },
    {
      title: 'ngSwitchDefault',
      content: 'ngSwitchDefault'
    }
  ];
  emitchildclear: number;
  oneAtATime: boolean = true;
  customClass = 'panel panel-success'; // 可以定义类，自己自定义样式。可选类有panel-primary, panel-info, panel-warning,panel-danger

  // 
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(public confirm: matDialogConfirmService) { }

  ngOnInit() {
  }

  tooltipChange(ev) {
    console.log(ev);
  }
  step = -1;

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
    this.disabled = false; // mat-tab解除禁用
  }
  tabChange(e) {
    console.log(e);
  }
  // bs accordion start
  log(event: boolean, i:number) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}, ${i}`);
    this.emitchildclear = i;
  }
  addGroupItem() {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }
  getCustomClass(i){
    // console.log(i);
    let classV = '';
    switch(i%4) {
      case 0:
        classV = 'panel panel-primary';
        break;
      case 1:
        classV = 'panel panel-info';
        break;
      case 2:
        classV = 'panel panel-warning';
        break;
      case 3:
        classV = 'panel panel-danger';
        break;
      default:
        break;
    }
    return classV;
  }
}
