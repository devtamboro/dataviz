import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushRoutingModule } from './push-routing.module';
import { PushComponent } from './push.component';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
@NgModule({
  declarations: [
    PushComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PushRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class PushModule { }
