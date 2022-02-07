import { Component, OnInit } from '@angular/core';

import { DataManipulationService } from '../service/data-manipulation.service';
import { UserDetails } from './../models/model'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList!: UserDetails[];
  

  constructor(private myService: DataManipulationService) { }

  ngOnInit(): void {
    
  }
  getDaata() {
    this.myService.getData().subscribe( {
      next: (data:UserDetails[]) => {
      // console.log(data);
      this.userList = data
    },
    error: (error)=>{
      alert("Somethings Went Wrong");
    }}); 
  }

  deleteUser(id:number) {
    this.myService.deleteUser(id).subscribe ( {
      next: (deleteid:UserDetails) => {
        console.log("deleted")
        this.getDaata()
      }
    });
  }

  // editUser(id:number) {
  //   this.myService.getId(id).subscribe ({
  //     next: (id) =>  {
  //       console.log(id)
  //       this.detailform.patchValue(id);
  //     }
  //   });
  // }
  // patchValue(id:number) {

  // }
}
