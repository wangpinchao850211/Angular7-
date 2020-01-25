import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[wpcTooltip]'
})
export class WpcTooltipDirective {

  constructor(
    private el: ElementRef, 
    private render: Renderer2
  ) {
    console.log(this.el.nativeElement);
  }

}
