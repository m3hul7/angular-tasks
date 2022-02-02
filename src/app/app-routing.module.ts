import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirPipeComponent } from './dir-pipe/dir-pipe.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', component: ReactiveFormComponent},
  { path: 'dir-pipe', component: DirPipeComponent},
  { path: 'parent', component: ParentComponent},
];



@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
