import { Pipe, PipeTransform } from '@angular/core';
import { format } from "date-fns";
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(
    date: number | Date,
    dtformat?: string
  ): any {
    if(date == null){
      return "";
    }
    return format(date, dtformat);
  }
}
