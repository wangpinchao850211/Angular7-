import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'checkBoxFormat' })
export class CheckBoxFormatPipe implements PipeTransform {
    constructor() { }
    transform(value) {
        if (value === 'N') {
            return 'No'
        } else if (value === 'Y') {
            return 'Yes'
        } else {
            return 'Blank'
        }
    }
}
