import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
interface DataItem {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}
interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  priority: boolean | number;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
  width: string;
}
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent implements OnInit {

  checked = false; // 是否全选
  loading = false;
  indeterminate = false; // 全选，半选，没选的状态
  listOfData: readonly DataItem[] = []; // table总数据
  listOfCurrentPageData: readonly DataItem[] = []; // 分页显示的当前数据
  setOfCheckedId = new Set<number>(); // 选中的数据

  // filter sort
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      priority: false,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'wpc', value: 'wpc' },
        { text: 'Edward King', value: 'Edward King' },
        // { text: 'Edward King', value: 'Edward King', byDefault: true } byDefault: true 启动默认筛选项
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1),
      width: '8%'
    },
    {
      name: 'Age',
      sortOrder: 'descend',
      priority: 1,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
      width: '10%'
    },
    {
      name: 'Address',
      sortOrder: null,
      priority: 2,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1,
      width: '18%'
    }
  ];
  // search
  searchValue = '';
  visible = false;
  listOfDisplayData:DataItem[] = [];

  // imgs
  imgsArray
  showImgs = []; // 要展示的数组
  theIngdex = 0;
  imgPreview = false;

  updateCheckedSet(id: number, checked: boolean): void { // 更新选中数据
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly DataItem[]): void {// 分页变更
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void { // 更新header checkbox选中状态
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {// 每个checkbox勾选回调
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    // console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }
  constructor() { }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => ({
      id: index,
      name: index % 2 === 0 ? `Edward King ${index}`: `wpc-${index}`,
      age: 32,
      address: index % 2 === 0 ? `London, Park Lane no. ${index}` : `china,DaLian gaoxinyuanqu Baihe wpc-${index}`,
      disabled: index % 2 === 0,
      imgsArray: [
        'http://pic35.photophoto.cn/20150620/0008118456919228_b.jpg',
        'http://img.zcool.cn/community/0153a658c2a799a801219c773bfcaa.jpg@1280w_1l_2o_100sh.png'
      ]
    }));
    this.listOfDisplayData = [...this.listOfData];

    this.imgsArray = [ // 验证ng-zorro 走马灯不好使
      'http://pic35.photophoto.cn/20150620/0008118456919228_b.jpg',
      'http://img.zcool.cn/community/0153a658c2a799a801219c773bfcaa.jpg@1280w_1l_2o_100sh.png',
      'http://pic35.photophoto.cn/20150620/0008118456919228_b.jpg',
      'http://img.zcool.cn/community/0153a658c2a799a801219c773bfcaa.jpg@1280w_1l_2o_100sh.png',
    ]
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }

  // ts中定义背景图的方式：
  getImgStyle(url) {
    const style = {
      'background-image': `url(${url})`,
      'background-repeat': 'no-repeat',
      'background-size': `100% 100%`,
      'width': '50%',
    }
    return style
  }

  imgClick(row, showIndex) {
      this.showImgs = [];
      this.showImgs = row.imgsArray.concat();
      this.theIngdex = showIndex;
      this.imgPreview = true;
  }

  closePreview(event) {
    if (event === 1) {
      this.imgPreview = false;
      this.theIngdex = 0;
    }
  }

}
