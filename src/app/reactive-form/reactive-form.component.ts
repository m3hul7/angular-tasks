import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
   /*  this.myReactiveForm = new FormGroup({
      'firstnameandlastname' : new FormGroup({
        'fname' : new FormControl('jdjfkj', [Validators.required, Validators.maxLength(6), Validators.minLength(4)]),
        'lname' : new FormControl('gfgfg'),
      }),
     
      'email' : new FormControl('', Validators.email),
      'cars' : new FormControl('volvo'),
      'skillarray' : new FormArray([
        new FormControl(null),
      ])
    })  
     */
    this.myReactiveForm=this.fb.group({
      fname:[]
    })
  }
  onSubmit() {
    // debugger
    console.log(this.myReactiveForm);

  }
  get userFormControls () {
    return this.myReactiveForm.get('skillarray');
  }

}
