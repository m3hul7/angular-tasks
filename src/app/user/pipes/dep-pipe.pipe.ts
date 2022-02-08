import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/model';

@Pipe({
  name: 'depPipe'
})
export class DepPipePipe implements PipeTransform {

  transform(value: number,department:Department[]): string {
    let name:string = ''
    // for(let x of department) {
    //   if(value == x.id)
    //   name = x.dname
    //   // console.log(x.dname)
    // }
    department.find ((object)=> {
      if(object.id == value){
        name = object.dname
      }
    })

    return name;
  }

}
