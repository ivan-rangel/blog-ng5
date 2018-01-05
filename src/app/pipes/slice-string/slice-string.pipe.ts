import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (value.length > 15) {
        let slicedString = `${value.slice(0, 15)}...`;
        return slicedString;
      } else {
        return value;
      }
    }
    return null
  }

}
