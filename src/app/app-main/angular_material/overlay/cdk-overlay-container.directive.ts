import { Directive, ElementRef } from '@angular/core';
import { CdkOverlayContainer } from 'src/app/cdk-overlay-container';

import {OverlayContainer} from '@angular/cdk/overlay';

@Directive({
    selector: '[myCdkOverlayContainer]'
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
        
        this.cdkOverlayContainer['myCreateContainer'](this.elementReference.nativeElement);
    }
}