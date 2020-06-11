import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-cycling',
  templateUrl: './self-cycling.component.html',
  styleUrls: ['./self-cycling.component.scss']
})


export class SelfCyclingComponent implements OnInit {

  layout = {
    config: {
      type: 'basic'
    }
  }
  treeData: any;
  mockData = [
      { id: 1, pId: 0, name: 'group-1', hasChild: true, isOpen: true },
      { id: 11, pId: 1, name: 'group-1-sub-1', hasChild: true, isOpen: false },
      { id: 111, pId: 11, name: 'Image', hasChild: false, isOpen: false },
      { id: 112, pId: 11, name: 'group-1-sub-1-sub', hasChild: true, isOpen: false },
      { id: 1121, pId: 112, name: 'Image', hasChild: false, isOpen: false },
      { id: 1122, pId: 112, name: 'Image', hasChild: false, isOpen: false },
      { id: 12, pId: 1, name: 'group-1-sub-2', hasChild: true, isOpen: false },
      { id: 121, pId: 12, name: 'Image', hasChild: false, isOpen: false },
      { id: 122, pId: 12, name: 'Image', hasChild: false, isOpen: false },
      { id: 13, pId: 1, name: 'Image', hasChild: false, isOpen: false },
      { id: 2, pId: 0, name: 'group-2', hasChild: true, isOpen: false },
      { id: 21, pId: 2, name: 'Image', hasChild: false, isOpen: false },
      { id: 22, pId: 2, name: 'Image', hasChild: false, isOpen: false },
      { id: 3, pId: 0, name: 'group-3', hasChild: false, isOpen: false },
      // { id: 31, pId: 3, name: 'Image', hasChild: false, isOpen: false },
      // { id: 32, pId: 3, name: 'Image', hasChild: false, isOpen: false },
      { id: 4, pId: 0, name: 'group-4', hasChild: true, isOpen: false },
      { id: 41, pId: 4, name: 'group-4-sub', hasChild: true, isOpen: false },
      { id: 411, pId: 41, name: 'Image', hasChild: false, isOpen: false },
      { id: 412, pId: 41, name: 'Image', hasChild: false, isOpen: false },
      { id: 42, pId: 4, name: 'Image', hasChild: false, isOpen: false },
      { id: 43, pId: 4, name: 'Image', hasChild: false, isOpen: false }
  ];
  constructor() {
    this.treeData = this.treeDataParse(this.mockData, 0);
    console.log(this.treeData);
  }

  ngOnInit() { 
  }
  
  treeDataParse(list: Array<any>, pId: number) { // recurrence data
      const res = [];
      let temp;
      list.forEach((item, i) => {
          if (item.pId === pId) {
              res.push(item);
              temp = this.treeDataParse(list, item.id);
              if (temp.length > 0) {
                  item.children = temp;
              }
          }
      });
      return res;
  }
  ngModelChange() { // 单选radio-group change事件，属于事件冒泡，先是上面方法先触发，然后再触发这里
    console.log(this.layout.config.type);
  }
}
