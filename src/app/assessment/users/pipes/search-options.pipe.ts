import { Pipe, PipeTransform } from '@angular/core';
import { users } from '../models/users.model';

@Pipe({
  name: 'searchOptions'
})
export class SearchOptionsPipe implements PipeTransform {

  transform(value: users[], option:string): users[] {
    if(option.toLowerCase() == 'all') {
      return value;
    }
    return value.filter((obj) => {
      return obj.clients.toLowerCase().match(option.toLowerCase())
  })
}

}
