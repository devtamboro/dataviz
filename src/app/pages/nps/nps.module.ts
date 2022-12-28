import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpsRoutingModule } from './nps-routing.module';
import { NpsComponent } from './nps.component';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    NpsComponent
  ],
  imports: [
    CommonModule,
    NpsRoutingModule,
    NgChartsModule,
    MatGridListModule
  ]
})
export class NpsModule { }
