import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { DataManipulationService } from '../service/data-manipulation.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  detailForm!:FormGroup;
  constructor( private formBuilder: FormBuilder, private myService: DataManipulationService) { }

  ngOnInit(): void {
    this.buildUserDetailsForm();
    console.log(this.detailForm);
  }

  buildUserDetailsForm() {
    this.detailForm = this.formBuilder.group({
      id: [],
      fname: ['nnnn'],
      lname: [''],
      email: ['',Validators.email],
      gender: [''],
      date: [''],
      phone: ['']
    })
  }
  

  onSubmit() {
    console.log(this.detailForm.value)
    this.myService.createUser(this.detailForm?.value).subscribe({
      next: (result) => {
        alert("successs");
      },
    error: (error) => 
    {
      alert("error something went wrong")
    }});
    this.detailForm?.reset()
    // debugger
    // this.myService.createUser(data)
    // if(this.detailsForm.valid) {
    //   this.myService.createUser(data)
    //   this.resetForm()
    // }
  }
  resetForm() {
    this.detailForm?.reset();
  }
}
