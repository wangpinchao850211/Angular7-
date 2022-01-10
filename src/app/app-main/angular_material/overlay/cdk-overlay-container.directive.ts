import { Directive, ElementRef } from '@angular/core';
import { CdkOverlayContainer } from 'src/app/cdk-overlay-container';

import {OverlayContainer} from '@angular/cdk/overlay';

@Directive({
    selector: '[myCdkOverlayContainer]',
    providers: [{ provide: OverlayContainer, useClass: CdkOverlayContainer }] // extends OverlayContainer 自定义的类，在这个位置注入！！！在根组件与FullscreenOverlayContainer 注入冲突！！！
})
export class CdkOverlayContainerDirective {
    constructor(
      protected elementReference: ElementRef, 
      protected cdkOverlayContainer: OverlayContainer
      ) {
        this.elementReference    = elementReference;
        this.cdkOverlayContainer = cdkOverlayContainer;

        console.log(this.elementReference.nativeElement);
        console.log(this.cdkOverlayContainer);
        // myCreateContainer是自定义的方法，使用指令把当前元素填入
        this.cdkOverlayContainer['myCreateContainer'](this.elementReference.nativeElement);
    }
}