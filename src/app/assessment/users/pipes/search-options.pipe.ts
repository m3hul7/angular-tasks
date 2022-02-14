import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOptions'
})
export class SearchOptionsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
