import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceEmail'
})
export class SliceEmailPipe implements PipeTransform {
  // pipe 就是一种简单过滤数据作用，还可以直接调用方法操作数据
  transform(value: any, args?: any): any {
    let sliceResult = "";
    if(value && value.lastIndexOf("@")){
        sliceResult = value.substring(0, value.lastIndexOf("@"));
    }
    return sliceResult;
  }

}
