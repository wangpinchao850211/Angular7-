import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Inject, Type, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface DiologPos {
  top: string;
  left: string;
  width: string;
  height: string;
}
export interface ChildConfig {
  inputs: object;
  outputs: object;
  position?: DiologPos;
}

@Injectable({
  providedIn: 'root'
})
export class DomService {

  private childComponentRef: ComponentRef<any>
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
    // ComponentFactoryResolver 得到组件工厂类，将一个组件插入到组件树中，ApplicationRef得到angular程序组件树
  } 

  public appendComponentTo(
    parentId: string,
    child: Type<any>,
    childConfig: ChildConfig
  ) {
    // 第一步使用this.resolver创建组件，并且使用this.injector将依赖进行实力化创建
    const childComponentRef = this.resolver
      .resolveComponentFactory(child)
      .create(this.injector);
      // 是将外部的config的input，output设置在组件类上
    this.attachConfig(childConfig, childComponentRef);
    this.childComponentRef = childComponentRef;
    // 第二步将创建的组件添加到组件试图树上
    this.appRef.attachView(childComponentRef.hostView);

    // 第三步，将元素插入到具体的dom节点上
    const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.document.getElementById(parentId).appendChild(childDOMElement);
  }

  public attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
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
    this.appRef.detachView(this.childComponentRef.hostView);
  }
}
