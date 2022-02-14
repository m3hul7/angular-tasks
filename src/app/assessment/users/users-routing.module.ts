import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'list', pathMatch:'full'
      },
      {
        path: 'form', component: UsersFormComponent
      },
      {
        path: 'list', component: UsersListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
