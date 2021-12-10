import { Component, ViewChild, OnInit, Input, OnChanges, SimpleChanges, DoCheck, ElementRef, Renderer2 } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
 
// 1.变更检测机制
// （1）目的：保证组件属性和浏览器的显示同步，浏览器里面发生任何异步变化都会触发“变更检测”，当变更检测运行时，会检测应用中所有的绑定关系。

// （2）检测策略：

//      A:Default策略：检查所有组件

//      B.Onpush策略：阻止检查继续走下去

// （3）DoCheck钩子的调用

export class LifeCycleComponent implements OnInit,OnChanges,DoCheck {
  @Input() greeting:string; // 组件输入值将触发ngOnChanges() 检测
  @ViewChild('containerRef') containerRef: ElementRef;

  public user = { // 声明一个对象
    'name':'wangpinchao'
  };

  Status = 'N';

  oldUserName:string;//用来保存user.name变更之前的值
  changeDetected:boolean;//标记当前的user.name属性是否发生变化
  changeCount:number = 0;//标记变更检测机制被调用的次数

  nameChangeMsg = '';
 
  ngDoCheck(): void {   //触发变更检测机制就是调用DoCheck (实现$watch功能)
     if(this.user.name!==this.oldUserName){
          //user.name发生了变化
          this.changeDetected = true;
          console.log("Docheck: user.name 从"+this.oldUserName+"变为"+this.user.name);
          this.nameChangeMsg = "Docheck: user.name 从"+this.oldUserName+"变为"+this.user.name;
          this.oldUserName = this.user.name;
     }
     if (!this.changeDetected) {
       this.changeCount = 0;
     } else {
       this.changeCount=this.changeCount+1;
       // console.log("DoCheck:user.name没发生变化时，ngDoCheck方法被调用了"+this.changeCount+"次")
     }
  }
  // angular中ngOnChanges与组件变化检测的关系
  // 1.ngOnChanges只有在输入值改变的时候才会触发，如果输入值(@Input)是一个对象，改变对象内的属性的话是不会触发ngOnChanges的。

  // 2.组件的变化检测：

  // 　　2a.changeDetection如果是ChangeDetectionStrategy.Default的话，无论输入值(@Input)是否发生变化，都会进行组件自身的变化检测。

  // 　　2b.changeDetection如果是ChangeDetectionStrategy.OnPush的话，只有在输入值(@Input)发生变化的情况下，才会进行自身的变化检测。

  // 　　因此OnPush的组件在其内部改变属性值是不会反应在页面上的
  ngOnChanges(changes: SimpleChanges): void { // 检测greeting输入值，亦可用get set来进行设置
      console.log(JSON.stringify(changes,null,2));
      console.log(this.greeting);
      //  _.debounce(that.setContaineRef(this.greeting), 300);
      console.log(changes.greeting.firstChange);
      if (!changes.greeting.firstChange) {
        this.setContaineRef(this.greeting);
      }
  }

  setContaineRef(color) {
    console.log(color);
    this.render.setStyle(this.containerRef?.nativeElement, 'backgroundColor', color);
  }
 
  constructor(
    private render: Renderer2
  ) {
  }
 
  ngOnInit() {
    setTimeout(() => {
      this.user.name = 'wangqihuan';
    }, 3000);
  }
 
}