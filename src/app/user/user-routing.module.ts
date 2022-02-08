import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "user-list", pathMatch: "full"
      },
      {
        path:'user-list', component: UserListComponent
      },
      {
        path:'user-form', component: UserFormComponent
      },
      {
        path:'edit/:id', component:UserFormComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
