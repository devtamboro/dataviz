import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    CommonModule
  ],
  exports: [BasicComponent]
})
export class BasicModule { }
