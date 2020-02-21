import { Injectable, Inject, Type, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Config, MessagedomService } from './messagedom.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WpcMessageService {

  private render: Renderer2;
  private readonly messageid = 'container';
  // BehaviorSubject用于储存数据，特点能够保存最新一次的数据,数据还没考虑好
  private data$ = new BehaviorSubject<object | null>(null);
  constructor(
    private domService: MessagedomService,
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    // 再service里 render工厂方法
    this.render = rendererFactory.createRenderer(null, null);
  }

  public showMessage(config: Config) {
    this.domService.appendComponentTo(config);
    const ele = this.domService.getElement; // 获取dom组件
    setTimeout(() => {
      this.toggleVisibility(ele);
      this.setStyle(ele);
    }, 0);
    setTimeout(() => { // 传入时间后关闭
      this.closeMessage();
    }, config.timeout);
    // this.data$.next(null); // 新打开是清空数据
  }

  closeMessage() {
    this.domService.removeComponent();
  }

  saveData(data: object | null) {
    // this.data$.next(data);
  }

  getData() {
    return this.data$.asObservable();
  }

  private setStyle(element) { // 要通过js来设置样式，使用组件，因为是动态组件，所以不能识别样式
    this.render.setStyle(element, 'display', 'block');
    this.render.setStyle(element, 'width', '200px');
    this.render.setStyle(element, 'height', '42px');
    this.render.setStyle(element, 'line-height', '42px');
    this.render.setStyle(element, 'position', 'fixed');
    this.render.setStyle(element, 'right', '40px');
    this.render.setStyle(element, 'top', '80px');
    this.render.setStyle(element, 'border-radius', '6px');
    this.render.setStyle(element, 'text-align', 'center');
    this.render.setStyle(element, 'background', 'greenyellow');
  }

  private toggleVisibility(element: HTMLElement) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
      element.classList.add('hidden');
      return;
    }
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('show');
    }
  }
}
