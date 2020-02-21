import { Component, OnInit } from '@angular/core';
import { DialogService } from '../shared/components/wpc-dialog/dialog.service';
import { TextboxComponent } from '../shared/components/textbox/textbox.component';
import { WpcMessageService } from '../shared/components/wpc-message/wpcmessage.service';

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.scss'],
  // providers: [WpcMessageService],
})
export class CommonComponentComponent implements OnInit {

  wpc = 'wangpinchao';
  public tooltipList = [
    {
      id: 0,
      content: '这是第一tooltip块'
    },
    {
      id: 1,
      content: '这是第二tooltip块'
    },
    {
      id: 2,
      content: '这是第三tooltip块'
    },
    {
      id: 3,
      content: '这是第四tooltip块'
    },
    {
      id: 4,
      content: '这是第五tooltip块'
    }
  ];
  constructor(
    private dialogService: DialogService,
    private message: WpcMessageService
  ) { }

  ngOnInit() {
  }

  ngSubmit(value) { // 模板表单提交值
    console.log(value);
    const config = {
      timeout: 1000, // 多长时间关闭
      handlerClick: false, // 是否允许手动关闭
      inputs: {               // 消息类型
        infoType: 'success' // 类型可以设置消息状态样式
      }
    }
    this.message.showMessage(config); 
  }

  toggleMesssage() {
    this.dialogService.open(TextboxComponent, {
      inputs: {
        wpc: this.wpc
      },
      outputs: {},
      position: {
        top: `50%`,
        left: `50%`,
        width: `100px`,
        height: `50px`
      }
    });
  }

  removeDialog(ev: Event) {
    console.log(ev);
    this.dialogService.close();
  }
}
