import { Component, OnInit } from '@angular/core';
import { format, differenceInDays, subDays, eachDayOfInterval, eachWeekendOfInterval, isSaturday, isSunday } from 'date-fns';
import * as _ from 'lodash';

@Component({
  selector: 'app-work-member-list',
  templateUrl: './work-member-list.component.html',
  styleUrls: ['./work-member-list.component.scss']
})
export class WorkMemberListComponent implements OnInit {

  list = [
    "李林", "赵伟", "韩旭", "刘冬雪", "许苏埃", "周晓琳", "宋晓英", "郭旭华"
  ]
  currentWorkList = [];
  todayDate: string;
  currentDate: string;
  constructor() { }

  ngOnInit() {
    this.todayDate = format((new Date()), 'yyyy-MM-dd');
  }

  onValueChange(ev: Date) {
    console.log(ev);
    console.log(new Date());

    if (isSaturday(ev) || isSunday(ev)) {
      alert('选择的是工作日');
      return;
    }

    this.currentDate = format(ev, 'yyyy-MM-dd');
    
    let everyDay = [];
    let everyWeekend = [];
    const distance = differenceInDays(new Date(), ev);
    // console.log(distance);
    let workFlag: Boolean;
    if (distance < 0) { // 未来日期
      // console.log(subDays(new Date(), distance));
      everyDay = this.tranfDate(0, (new Date()), ev);
      everyWeekend = this.tranfDate(1, (new Date()), ev);
      workFlag = true;
    } else { // 推断出历史日期中的工作人员名单
      // console.log(subDays(ev, Math.abs(distance)));
      everyDay = this.tranfDate(0, ev, (new Date()));
      everyWeekend = this.tranfDate(1, ev, (new Date()));
      workFlag = false;
    } 
    // 过滤返回值
    const lastDate = _.xor(everyDay, everyWeekend); // 取a的补集，就是工作日
    // 判断不了，同一天，不是同一个日期对象
    // console.log(lastDate);
    this.getWorkList(workFlag, lastDate);
  }

  tranfDate(falg, start, end) {
    let tranArr = [];
    if (falg === 0) {
      const everyDay = eachDayOfInterval({ // 注意这个方法只返回Date对象，并不是日期格式需要转换一下，再判断，否则日期对象不会相等
        start: start, 
        end: end
      });
      everyDay.forEach(i => {
        tranArr.push(format(i, 'yyyy-MM-dd'));
      });
    } else {
      const everyWeekend = eachWeekendOfInterval({
        start: start, 
        end: end
      });
      everyWeekend.forEach(i => {
        tranArr.push(format(i, 'yyyy-MM-dd'));
      });
    }
    return tranArr;
  }

  getWorkList(isBefore, lastDate) {
    this.currentWorkList = [];
    if (isBefore) {
      if (lastDate.length % 2 === 0) {
        this.currentWorkList = this.list.filter((i, index) => {
          return (index % 2 === 0);
        });
      } else {
        this.currentWorkList = this.list.filter((i, index) => {
          return (index % 2 === 1);
        });
      }
    } else {
      if (lastDate.length % 2 === 1) {
        this.currentWorkList = this.list.filter((i, index) => {
          return (index % 2 === 0);
        });
      } else {
        this.currentWorkList = this.list.filter((i, index) => {
          return (index % 2 === 1);
        });
      }
    }
  }
}
