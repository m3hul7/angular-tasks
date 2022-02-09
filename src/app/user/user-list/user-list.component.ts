import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from '../service/data-manipulation.service';
import { Department, UserDetails } from './../models/model'



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList!: UserDetails[];
  searchText:string = ''
  departmentArray: Department[] = []
  checkarray:UserDetails[] = []
  boolstore?:boolean
  constructor(private myService: DataManipulationService, private router: Router) {
    this.getDeparment()
   }

  ngOnInit(): void {
    this.getDaata();
  }
  
  // checkEmptyArray() {
  //   this.checkarray= this.pipe.transform(this.userList, this.searchText)
  //   if(this.checkarray.length == 0){
  //      this.boolstore = true
  //   }
  //   else
  //   this.boolstore = false
  // }
  getDeparment() {
    this.myService.getDepartment().subscribe({
      next: (data) => {
        this.departmentArray = data
      }
    })
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

  navigateToEdit(id:number){
    this.router.navigate([`../edit/${id}`])
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
