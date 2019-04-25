import { Pipe, PipeTransform } from '@angular/core'
@Pipe({name: 'TBD'})
export class FieldEmptyPipe implements PipeTransform {
  transform(value: any) {
    if (!!value) {
      return value
    } else {
      return 'TBD'
    }
  }
}
