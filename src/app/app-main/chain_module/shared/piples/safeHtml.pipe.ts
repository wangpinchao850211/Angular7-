import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }

  transform(value) {
    if (value === 'Y') {
      value = 'Yes'
    }
    if (value === 'N') {
      value = 'No'
    }
    return this.sanitized.bypassSecurityTrustHtml(value)
  }
}
