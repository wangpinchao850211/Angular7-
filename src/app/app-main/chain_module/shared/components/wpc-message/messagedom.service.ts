import { Injectable, Injector, Inject, ComponentFactoryResolver, ViewContainerRef, ElementRef, ComponentRef, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WpcMessageComponent } from './wpc-message.component';

export enum MassageType {
  'success' = 1,
  'info' = 2,
  'warn' = 3,
  'error' = 4
}

export interface Config {
  timeout?: number,
  handlerClick: boolean
  inputs: object,
  outputs?: object
}

@Injectable({
  providedIn: 'root'
})

export class MessagedomService {

  public messageComponent: ComponentRef<any>; // 注意这种创建的组件是ComponentRef，并不是ElementRef
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public appendComponentTo(
    config: Config
  ) {
    console.log(config);
    this.messageComponent = this.resolver.resolveComponentFactory<any>(WpcMessageComponent).create(this.injector);
    // this.messageComponent = this.container.createComponent(factory); 
    // ViewContainerRef注入有问题，没弄好！！！

    // 第二步将创建的组件添加到组件试图树上
    this.appRef.attachView(this.messageComponent.hostView);

    // 是将外部的config的input，output设置在组件类上
    this.attachConfig(config, this.messageComponent);
    // console.log(this.messageComponent);

    // 第三步，将元素插入到具体的dom节点上
    const childDOMElement = (this.messageComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // 添加到最外层
    this.document.body.appendChild(childDOMElement);
  }

  public get getElement() { // 获取组件，供service来设置样式
    return (this.messageComponent.hostView as EmbeddedViewRef<any>).rootNodes[0];
  }

  public attachConfig(config: Config, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    // 对组件的input中的每一个key值进行设置上外部config中的值
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const element = inputs[key];
        componentRef.instance[key] = element;
      }
    }
    // 对组件的Onput中的每一个key值进行设置上外部config中的值
    for (const key in outputs) {
      if (outputs.hasOwnProperty(key)) {
        const element = outputs[key];
        componentRef.instance[key] = element;
      }
    }
  }

  public removeComponent() {
    this.appRef.detachView(this.messageComponent.hostView);
  }
}
