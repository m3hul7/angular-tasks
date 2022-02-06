import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
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
    this.getDaata()
    
  }
  getDaata() {
    this.myService.getData().subscribe( {
      next: (data:UserDetails[]) => {
      console.log(data);
      this.userList = data
    },
    error: (error)=>{
      alert("Somethings Went Wrong");
    }}); 
  }
  // getProductList() {
  //   this.productService.getProductList().subscribe({
  //     next: (products: Product[]) => {
  //     this.products = products;
  //   },error: ,(error)=>{
  //     alert("Somethings Went Wrong");
  //   });}
  // }
}
