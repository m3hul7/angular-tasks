import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirPipeComponent } from './dir-pipe/dir-pipe.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirPipeComponent,
    ReactiveFormComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
