import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
