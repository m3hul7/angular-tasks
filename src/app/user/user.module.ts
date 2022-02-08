import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataManipulationService } from './service/data-manipulation.service';
import { HttpClientModule } from '@angular/common/http';
import { SerachByNamePipe } from './pipes/serach-by-name.pipe';
import { DepPipePipe } from './pipes/dep-pipe.pipe';



@NgModule({
  declarations: [
   
    UserListComponent,
    UserFormComponent,
    SerachByNamePipe,
    DepPipePipe,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    UserListComponent
  ],
  providers:[
    DataManipulationService
  ]
})
export class UserModule { }
