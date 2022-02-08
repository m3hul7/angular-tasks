import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataManipulationService } from '../service/data-manipulation.service';
import { Department } from '../models/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id!:number
  detailForm!:FormGroup;
  department!:Department[];
  editmode:boolean = false
  constructor( private formBuilder: FormBuilder, private myService: DataManipulationService, private route:ActivatedRoute, private router: Router) { 
    this.getDepartmet()
    // console.log(this.department)
    this.buildUserDetailsForm();
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    this.editmode = !this.id
    if(!this.editmode) {
      this.myService.getId(this.id).subscribe({
        next: (data) => {this.detailForm.patchValue(data)},
        error: (e) => {console.log("error")
      }
      })
    }
   
    
    // console.log(this.detailForm);
  }

  buildUserDetailsForm() {
    this.detailForm = this.formBuilder.group({
      id: [],
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      gender: ['',[Validators.required]],
      date: ['',[Validators.required]],
      deparment: ['',[Validators.required]],
      phone: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
  }
  
  
  get f(){
    return this.detailForm.controls;
  }
  onSubmit() {
    // console.log(this.detailForm.value)
    if(this.editmode) {
      if(this.detailForm.valid) {
        this.myService.createUser(this.detailForm?.value).subscribe({
          next: (result) => {
            console.log("saved")
          },
        error: (error) => 
        {
          alert("error something went wrong")
        }});
        this.detailForm?.reset()
      }
      else {
        alert ("invalid form")
      }
      this.router.navigate(['/user/user-list'])
    }
    else {
      if(this.detailForm.valid) {
        this.myService.updateUser(this.id ,this.detailForm?.value).subscribe({
          next: (result) => {
            alert(" update successs");
          },
        error: (error) => 
        {
          alert("update error something went wrong")
        }});
        this.detailForm?.reset()
      }
      else {
        alert ("invalid form")
      }
    }
  }
  getDepartmet() {
    this.myService.getDepartment().subscribe( {
      next: (data:Department[]) => {
      console.log(data);
      this.department = data
    },
    error: (error)=>{
      alert("Somethings Went Wrong");
    }});
  }
  resetForm() {
    this.detailForm.reset()
  }
}