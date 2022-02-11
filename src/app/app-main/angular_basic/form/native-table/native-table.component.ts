import { Component, OnInit } from '@angular/core';
import { DrawTable } from 'src/app/utils/handerJS_table';
@Component({
  selector: 'app-native-table',
  templateUrl: './native-table.component.html',
  styleUrls: ['./native-table.component.scss']
})
export class NativeTableComponent implements OnInit {

  previewHtml = '';
  tableDataMap = {
    1: {
      '区域?东北': { 医院数量: '0' },
      '区域?华东': { 医院数量: '3' },
      '区域?华中': { 医院数量: '0' },
      '区域?华北': { 医院数量: '39' },
      '区域?东南': { 医院数量: '0' },
      '区域?西北': { 医院数量: '0' },
      '区域?西南': { 医院数量: '0' },
      '年份?2015': { 医院数量: '42' },
      '等级?三级': { 医院数量: '42' },
    },
    2: {
      'HIS_BELONG?县级': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
      'HIS_BELONG?委属': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
      'HIS_BELONG?市级': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
      'HIS_BELONG?省级': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
      'HIS_LEVEL?三级': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
      'HIS_LEVEL?二级': { 'INCOME(行显示)': '345134838', 'COST(支出)': '414322726' },
    },
  };
  tableStr = [];
  constructor() { }

  ngOnInit(): void {
    this.GetTableData();
    // console.log(this.tableStr);
    for (const key in this.tableDataMap) {
      this.tableStr.forEach((s) => {
        if (s[key]) {
          this.previewHtml += s[key];
        }
      });
    }
    // console.log(this.previewHtml);
  }

  GetTableData() {
    for (const key in this.tableDataMap) {
      if (this.tableDataMap[key] !== undefined) {
        // key传递给table的id
        this.tableStr.push({[key]: DrawTable(this.tableDataMap[key], key, '测试表格')});
      }
    }
  }

}
