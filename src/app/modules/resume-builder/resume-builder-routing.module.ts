import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: '', redirectTo: 'resume-form', pathMatch:'full'
      },
      {
        path:'resume-form', component:ResumeFormComponent
      },
      {
        path:'resume-view', component:ResumeViewComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
export class routingComponent {} [ResumeBuilderComponent]