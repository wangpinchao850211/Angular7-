import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], keyWord: string): any {
    console.log(keyWord);
    const filterFiled = 'title';
    if (!keyWord) {
      return list;
    }
    return list.filter((item) => {
      const fieldValue = item[filterFiled];
      return fieldValue.indexOf(keyWord) >= 0;
    });
  }

}
