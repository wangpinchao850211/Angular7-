import { Pipe, PipeTransform } from '@angular/core'
@Pipe({ name: 'blank' })
export class BlankValuePipe implements PipeTransform {
  constructor() {}
  transform(value) {
    if (!value) {
      return 'Blank'
    } else {
      return value
    }
  }
}
