import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siva',
  pure: false
})
export class SivaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length;
  }

}
