import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirPipeComponent} from './dir-pipe/dir-pipe.component';
import { CusotmedirDirective } from './dir-pipe/cusotmedir.directive';
import { FirstcapitalPipe } from './dir-pipe/firstcapital.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ResumeBuilderModule } from './modules/resume-builder/resume-builder.module';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirPipeComponent,
    CusotmedirDirective,
    FirstcapitalPipe,
    ReactiveFormComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UserModule,
    ResumeBuilderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
