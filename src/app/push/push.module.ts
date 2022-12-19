import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushRoutingModule } from './push-routing.module';
import { PushComponent } from './push.component';


@NgModule({
  declarations: [
    PushComponent
  ],
  imports: [
    CommonModule,
    PushRoutingModule
  ]
})
export class PushModule { }
