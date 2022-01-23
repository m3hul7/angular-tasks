import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirPipeComponent} from './dir-pipe/dir-pipe.component';
import { CusotmedirDirective } from './dir-pipe/cusotmedir.directive';
import { FirstcapitalPipe } from './dir-pipe/firstcapital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirPipeComponent,
    CusotmedirDirective,
    FirstcapitalPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
