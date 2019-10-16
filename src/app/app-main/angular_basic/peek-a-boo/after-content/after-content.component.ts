import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-after-content',
  template: `
    <div>-- projected content begins --</div>
      <ng-content></ng-content>
    <div style="margin-bottom: 100px; ">-- projected content ends --</div>
  `,
  styleUrls: ['./after-content.component.scss']
})

export class AfterContentComponent implements AfterContentChecked, AfterContentInit {

  private prevHero = '';
  comment = '';
  @ContentChild(ChildComponent) contentChild: ChildComponent;
  constructor(private logger: LoggerService) { }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logger.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logger.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logger.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // 使用 AfterContent 时，无需担心单向数据流规则.该组件的 doSomething() 方法立即更新了组件被绑定的 comment 属性。 它不用等下一回合。
  private doSomething() {}

}
