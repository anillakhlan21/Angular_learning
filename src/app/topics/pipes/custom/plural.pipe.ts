import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value: number, singular: string, plural: string): string {
    if (value === 1 || value === 0) {
      return `${value} ${singular}`;
    } else {
      return `${value} ${plural}`;
    }
  }

}
