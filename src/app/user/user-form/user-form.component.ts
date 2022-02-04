import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { DataManipulationService } from '../service/data-manipulation.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  detailForm?: FormGroup;
  constructor( private formBuilder: FormBuilder, private myService: DataManipulationService) { }

  ngOnInit(): void {
  }

  detailsForm = this.formBuilder.group({
    fname: ['',[Validators.required]],
    lname: ['',[Validators.required]],
    email: ['',Validators.email],
    gender: [''],
    date: [''],
    phone: ['']
  })
  onSubmit(data:any) {
    debugger
    console.log(data)
    // this.myService.createUser(this.detailForm?.value).subscribe(
    //   (result) => {
    //     alert("successs");
    //   },
    // (error) => 
    // {
    //   alert("error something went wrong")
    // });
    // this.detailForm?.reset()
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
