import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { NgChartsModule } from 'ng2-charts';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgChartsModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class CoursesModule { }
