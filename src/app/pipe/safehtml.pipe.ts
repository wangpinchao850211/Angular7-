import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl , DomSanitizer }  		from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }
  transform(value: any) {
      return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
