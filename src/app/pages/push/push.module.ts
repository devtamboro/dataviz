import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushRoutingModule } from './push-routing.module';
import { PushComponent } from './push.component';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list'
@NgModule({
  declarations: [
    PushComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PushRoutingModule,
    MatGridListModule,
  ]
})
export class PushModule { }
