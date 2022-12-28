import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpsComponent } from './nps.component';

const routes: Routes = [
  {
    path: '', component: NpsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpsRoutingModule { }
