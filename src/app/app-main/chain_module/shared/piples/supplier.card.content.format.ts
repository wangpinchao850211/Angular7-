import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'supcardformat'
})
export class SupplierCardContentFormatPipe implements PipeTransform {
  constructor() { }

  transform(value: any, args?: any): any {
    if (!!value) {
      return value
    } else {
      return 'TBD'
    }
  }

}
