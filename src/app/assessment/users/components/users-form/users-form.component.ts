import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { clients, offices } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  usersForm!: FormGroup;

  clients: clients[] = []
  offices: offices[] = []
  id:number = 0 
  editMode: boolean = false
  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userService.edit.subscribe((value) => { this.id = value, this.editMode = true, this.edit(this.id)})
   }

  ngOnInit(): void {
    this.buildUsersForm()
    this.getClientsOptions()
    this.getOfficesOptions()
  }

  edit(id:number) {
    this.userService.getId(this.id).subscribe({
      next: (data) => {this.usersForm.patchValue(data)},
      error: (e) => {console.log("error")
    }
    })
  }

  buildUsersForm() {
    this.usersForm = this.fb.group ({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['',[Validators.required]],
      contact: ['',[Validators.required]],
      clients: ['',[Validators.required]],
      offices: ['',[Validators.required]]
    })
  }
  getClientsOptions() {
    this.userService.getClients().subscribe(
      (options) => {
        this.clients = options
      }
    )
  }
  getOfficesOptions() {
    this.userService.getOffices().subscribe(
      (options) => {
        this.offices = options
      }
    )
  }
  onSubmit(){
    if(!this.editMode) {
      if(this.usersForm.valid) {
        this.userService.saveUser(this.usersForm.value).subscribe(
          (data) => { console.log("success") },
          (error) => { console.log("error") }
        )
        this.userService.setData(false);
      }
      else
      this.validateAllFormFields(this.usersForm);
    }
    else {
      if(this.usersForm.valid) {
        this.userService.updateUser(this.id,this.usersForm.value).subscribe(
          (data) => { console.log("success") },
          (error) => { console.log("error") }
        )
        this.userService.setData(false);
      }
      else
      this.validateAllFormFields(this.usersForm);
    }
  }
  onReset() {
    this.usersForm.reset();
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
