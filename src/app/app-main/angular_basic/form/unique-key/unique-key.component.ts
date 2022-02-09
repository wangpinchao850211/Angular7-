import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-unique-key',
  templateUrl: './unique-key.component.html',
  styleUrls: ['./unique-key.component.scss']
})
export class UniqueKeyComponent implements OnInit {

  titleMsg = `1、要求创建组可任意添加，所创建的组中任意key值在上部是没有选中状态，此组可供选择，否则是置灰状态<br>
  2、当选中上部选项，要求创建组中包含此项的组置灰<br>
  3、当选中下部组时，要求此组中包含在上部的所有选项置灰<br>
  4、移除置灰最为复杂，原则是要求相同key不可重复`;

  sourceChooseArray = [
    {
      credentialLable: '营业执照',
      key: '1',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '组织机构代码证',
      key: '2',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '纳税人证明',
      key: '3',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '授权书',
      key: '4',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '医疗器械经营许可证',
      key: '5',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '备案凭证',
      key: '6',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
    {
      credentialLable: '法人授权书',
      key: '7',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    },
  ];
  basicChooseArray = [];
  createChooseArray = [];
  selectCreateArray = [];
  creatGroupArray = [];
  staticsArr = [];

  isVisible = false;

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
    this.basicChooseArray = _.cloneDeep(this.sourceChooseArray);
    this.createChooseArray = _.cloneDeep(this.sourceChooseArray);
  }

  log(value: string[]) {
    this.staticsArr = [];
    this.staticsArr = value;
  }

  createGroup() {
    this.createChooseArray = _.cloneDeep(this.sourceChooseArray);
    if (!this.isVisible) this.isVisible = true;
  }

  popUpNzOnChange(value: string[]) {
    this.selectCreateArray = [];
    this.selectCreateArray = value;
  }

  handleCancel() {
    this.isVisible = false;
    this.createChooseArray = [];
    this.selectCreateArray = [];
  }

  handleOk() {
    if (this.selectCreateArray.length > 1) {
      this.addNewGroup(this.selectCreateArray);
      this.handleCancel();
    } else {
      this.message.warning('创建组至少选择两个选项');
    }
  }

  addNewGroup(array) {
    const newArr = this.sourceChooseArray.filter(i => array.includes(i.key));
    this.splitCollectionToStr(newArr);
  }
  
  // 将选中的数组key进行链接并字符串化
  splitCollectionToStr(Arr) {
    const EveryObj = {
      credentialLable: '',
      key: '',
      required: false, // 是否选择
      disabled: false, // 是否置灰
    };
    // 拼接字符串显示页面内容
    let KeyStr = '';
    let ValueStr = '';
    Arr.forEach((item, index) => {
      KeyStr += `${item.key}，`;
      ValueStr += `${item.credentialLable}，`;
    });
    KeyStr = KeyStr.substr(0, KeyStr.length - 1);
    ValueStr = ValueStr.substr(0, ValueStr.length - 1);
    // 判断是否置灰
    const arr = KeyStr.split('');
    if (this.judgeArr(arr, this.staticsArr)) {
      EveryObj.disabled = true;
    } else {
      // 判断创建组是否有相同key被勾选
      this.creatGroupArray.forEach((item) => {
        if (item.required) {
          let keyArr = item.key.split('，');
          if (this.judgeArr(keyArr, arr)) {
            EveryObj.disabled = true;
          }
        }
      });
    }
    // 将变量赋值给页面数据双向绑定
    EveryObj.key = KeyStr;
    EveryObj.credentialLable = ValueStr;
    this.creatGroupArray.push(EveryObj);
  }

  // 判断两个数组是否有相同的内容
  judgeArr(x, y) {
    let judgeBool = false;
    x.forEach((i) => {
      if (y.includes(i)) {
        judgeBool = true;
      }
    });
    return judgeBool;
  }

  // 变更禁用选项
  basicGroupChange(item, ev) {
    let WhetherTick = ev; // 是否勾选
      if (WhetherTick) {
        // 置灰创建组中包含此key的选项
        this.creatGroupArray.forEach((r) => {
          if (r.key.includes(item.key)) {
            r.disabled = true;
          }
        });
      } else {
        // 将已经置灰的包含此key值的选项变亮（要求其他key值并无勾选）
        this.creatGroupArray.forEach((r, ind) => {
          const everyKeyArr = r.key.split('，');
          if (r.key.includes(item.key)) {
            const judgeKey = _.pull(everyKeyArr, item.key); // 移除数组everyKeyArr中所有和item.key相同的
            let flag = true;
            for (const iterator of judgeKey) {
              if (this.whetherOuterInclude(iterator) || this.whetherInnerInclude(iterator, r.key, ind)) {
                flag = false; // 两层中有一个勾选了，不解除禁用
              }
            }
            if (flag) {
              r.disabled = false;
            }
          }
        });
      }
  }

  // 变更禁用选项
  createGroupChange(item, index, event) {
    const keyArr = item.key.split('，');
    let WhetherTick = event; // 是否勾选
    if (WhetherTick) {
      // 置灰basic组中包含的单key值选项
      this.basicChooseArray.forEach((o) => {
        if (keyArr.includes(o.key)) {
          o.disabled = true;
        }
      });
      // 置灰创建组中与其有相同key值的选项
      this.creatGroupArray.forEach((r, ind) => {
        const y = r.key.split('，');
        if (!(r === item && index === ind) && this.judgeArr(keyArr, y)) {
          r.disabled = true;
        }
      });
    } else {
      this.finalFunC(keyArr, item, index);
    }
  }

  // 变更禁用选项
  removeCreatGroup(item, index) {
    const keyArr = item.key.split('，');
    // 只处理没禁用的就ok了，禁用的一定是没勾选过的，就不用处理
    if (!item.disabled) {
      this.finalFunC(keyArr, item, index);
    }
    this.creatGroupArray.splice(index, 1);
  }

  // 移除和去掉创建组勾选变亮相同方法封装
  finalFunC(keyArr, ite, index) {
    // 1、创建组去掉勾选或移除，将单key值选项变亮
    this.basicChooseArray.forEach((o) => {
      if (keyArr.includes(o.key)) {
        o.disabled = false;
      }
    });
    // 2、将其他创建组中包含此key，且其他key值未被选的变亮
    this.creatGroupArray.forEach((r, ind) => {
      const everyKeyArr = r.key.split('，');
      if (!(r === ite && index === ind) && this.judgeArr(keyArr, everyKeyArr)) {
        const judgeKey = _.pullAll(everyKeyArr, keyArr);
        let flag = true;
        for (const ite of judgeKey) {
          if (this.whetherOuterInclude(ite) || this.whetherInnerInclude(ite, r.key, ind)) {
            flag = false;
          }
        }
        if (flag) {
          r.disabled = false;
        }
      }
    });
  }

  // 判断key值在外层是否有勾选
  whetherOuterInclude(k) {
    let flag = false;
    this.basicChooseArray.forEach((o) => {
      if ((k === o.key) && o.required) {
        flag = true;
      }
    });
    return flag;
  }
  // 判断key值在内层创建组是否有勾选（传入所选值和位置）
  whetherInnerInclude(k, kAll, index) {
    let flag = false;
    this.creatGroupArray.forEach((r, ind) => {
      const y = r.key.split('，');
      if (y !== kAll && index !== ind) {
        if (y.includes(k) && r.required) {
          flag = true;
        }
      }
    });
    return flag;
  }
}
