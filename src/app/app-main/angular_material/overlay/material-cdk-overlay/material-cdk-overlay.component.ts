import { Component, OnInit, Inject, ViewContainerRef, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, DomPortalHost, TemplatePortalDirective, TemplatePortal, PortalInjector } from '@angular/cdk/portal';
import { OverlayPanelComponent } from '../overlay-panel/overlay-panel.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-material-cdk-overlay',
  template: `
    <div style="padding: 20px">
      <!-- 全局显示 页面中心显示 (点击的时候显示) -->
      <button (click)="showOverlayGlobalPanelCenter()">页面中心显示</button>
    <br>
      <button (click)="showOverlayGlobalPanelOwn()">自定义页面显示</button>
    <br>
      <!-- 鼠标移入的时候显示 ng-template对应的内容，移出的时候不显示 -->
      <button style="margin-left: 10px" (mouseenter)="showOverlayPanelTemplate()"
              (mouseleave)="dismissOverlayPanelTemplate()">
          显示 ng-template 内容
      </button>
    <br>
      <!-- ng-template overlay 将要显示的内容 -->
      <ng-template cdk-portal #overlayGlobalTemplate="cdkPortal">
          <p class="template-overlay-pane"> ng-temtortelliniTemplateplate显示 </p>
      </ng-template>
    <br>
      <!-- 依附某个组件或者template显示,鼠标移入的时候显示，移出来的时候不显示 -->
      <button style="margin-left: 10px" #connectComponentOrigin
              (mouseenter)="showOverlayPanelConnectComponent()"
              (mouseleave)="dismissOverlayPanelConnectComponent()">
          overlay connect 组件显示
      </button>
    <br>
      <button cdk-overlay-origin #trigger="cdkOverlayOrigin" (click)="isMenuOpen = !isMenuOpen">
          指令实现
      </button>
      <ng-template cdk-connected-overlay
                    [cdkConnectedOverlayOrigin]="trigger"
                    [cdkConnectedOverlayWidth]="500"
                    cdkConnectedOverlayHasBackdrop
                    [cdkConnectedOverlayOpen]="isMenuOpen"
                    (backdropClick)="isMenuOpen=false">
          <div class="menu-wrap">
              我是通过指令实现的Overlay
          </div>
      </ng-template>

      <h3 style="color: white; margin-top: 40px;">
        两个重要的学习link:
        <br>
        <a href="https://blog.csdn.net/wuyuxing24/article/details/85011551">https://blog.csdn.net/wuyuxing24/article/details/85011551</a>
        <br>
        <a href="https://www.jianshu.com/p/dc21f1537879">https://www.jianshu.com/p/dc21f1537879</a>
      </h3>

    </div>
  `,
  styles: [`
    button {
      margin: 10px;
    }
    .template-overlay-pane {
      padding: 10px;
      border: 1px solid black;
      background-color: skyblue;
    }
  `],
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MaterialCdkOverlayComponent implements OnInit {

  globalOverlayPosition = 300;

  private _overlayTemplateRef: OverlayRef;
  @ViewChild('overlayGlobalTemplate') templateGlobalPortals: TemplatePortalDirective;

  private _overlayConnectRef: OverlayRef;
  @ViewChild('connectComponentOrigin') _overlayConnectComponentOrigin: ElementRef;

  /**
   * overlay是否显示
   */
  isMenuOpen = false;

  constructor(
    public overlay: Overlay, 
    public viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) public _document: any
  ) { }

  ngOnInit() {
  }

  /**
     * 一、 overlay 在整个屏幕的中间显示
     */
  showOverlayGlobalPanelCenter() {
    // config: OverlayConfig overlay的配置，配置显示位置，和滑动策略
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global() // 全局显示
        .centerHorizontally() // 水平居中
        .centerVertically(); // 垂直居中
    config.hasBackdrop = true; // 设置overlay后面有一层背景, 当然你也可以设置backdropClass 来设置这层背景的class
    const overlayRef = this.overlay.create(config); // OverlayRef, overlay层
    overlayRef.backdropClick().subscribe(() => {
        // 点击了backdrop背景
        overlayRef.dispose();
    });
    // OverlayPanelComponent是动态组件
    // 创建一个ComponentPortal，attach到OverlayRef，这个时候我们这个overlay层就显示出来了。
    overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
    // 监听overlayRef上的键盘按键事件
    overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
        // console.log(overlayRef._keydownEventSubscriptions + ' times');
        console.log(overlayRef._keydownEvents + ' times');
        console.log(event);
    });
  }

  /**
   * 二、自定义页面显示
   * */ 
  showOverlayGlobalPanelOwn() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global()
        .left(`${this.globalOverlayPosition}px`) // 自己控制位置
        .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
        overlayRef.dispose(); // 点击背景关掉弹窗
    });
    overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
  }

  /**
   * 三、显示 ng-template 的内容
   */
  showOverlayPanelTemplate() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .top(`${this.globalOverlayPosition}px`);
    this.globalOverlayPosition += 30;
    this._overlayTemplateRef = this.overlay.create(config);
    this._overlayTemplateRef.attach(this.templateGlobalPortals);
  }

  /**
   * 四、移除 ng-template 内容
   */
  dismissOverlayPanelTemplate() {
    if (this._overlayTemplateRef && this._overlayTemplateRef.hasAttached()) {
        this._overlayTemplateRef.dispose();
    }
  }

  /**
   * 五、overlay connect origin 显示，依附某个组件显示
   */
  showOverlayPanelConnectComponent() {
    const strategy = this.overlay.position()
        .flexibleConnectedTo(this._overlayConnectComponentOrigin.nativeElement)
        .withPositions([{
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetX: 0,
            offsetY: 0
        }]); // 这么理解 origin 组件(依附空组件) 的那个点(originX, originY) 和 overlay组件的点(overlayX, overlayY)
    // 重合，从而确定overlay组件显示的位置
    strategy.withLockedPosition(true);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.scrollStrategy = this.overlay.scrollStrategies.reposition(); // 更随滑动的策略
    this._overlayConnectRef = this.overlay.create(config);
    this._overlayConnectRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
  }

  dismissOverlayPanelConnectComponent() {
    if (this._overlayConnectRef && this._overlayConnectRef.hasAttached()) {
        this._overlayConnectRef.dispose();
    }
  }

}
