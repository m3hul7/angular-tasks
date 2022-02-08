import { Pipe, PipeTransform } from '@angular/core';
import { UserDetails } from '../models/model';

@Pipe({
  name: 'serachByName'
})
export class SerachByNamePipe implements PipeTransform {
  
  transform(value: UserDetails[], searchText:string): UserDetails[]{
    let array:UserDetails[] = []
    if(searchText == '') {
      return value;
    }
    return value.filter((obj) => {
      return obj.fname.toLowerCase().match(searchText.toLowerCase())
    })
      
    
    
  }

}
