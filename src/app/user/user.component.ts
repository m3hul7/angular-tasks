import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  buttonName:string = 'USER LIST'

  userForm:boolean =true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickComponent() {
    this.userForm = !this.userForm
    if(this.userForm) {
      this.buttonName = "USER FORM"
      this.router.navigate(['user-form'])
    }
    else {
      this.buttonName = "USER LIST"
      this.router.navigate(['user-list'])
    }
  }

}
