import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-after-view',
  template: `
    <div>-- child view begins --</div>
    <app-child></app-child>
    <div style="margin-bottom: 100px;">-- child view ends --</div>
  `,
  styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {

  private prevHero = '';
  @ViewChild(ChildComponent) viewChild: ChildComponent;
  constructor(private logger: LoggerService) { }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logger.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logger.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logger.logIt('AfterViewChecked');
      this.doSomething();
    }
  }
  // This surrogate for real business logic sets the `comment`
  // 遵循单向数据流规则
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    // if (c !== this.comment) {
    //   // Wait a tick because the component's view has already been checked
    //   this.logger.tick_then(() => this.comment = c);
    // }

    // 为什么在更新 comment 属性之前，doSomething() 方法要等上一拍(tick)？

    // Angular 的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图。 而这两个钩子都是在组件的视图已经被组合好之后触发的。

    // 如果立即更新组件中被绑定的 comment 属性，Angular 就会抛出一个错误(试试!)。 LoggerService.tick_then() 方法延迟更新日志一个回合（浏览器 JavaScript 周期回合），这样就够了。
  }

}
