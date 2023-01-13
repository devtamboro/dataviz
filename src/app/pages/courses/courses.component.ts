import { Component, OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(
    private coursesService: CoursesService
  ) { }

  coursesResults: Courses
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartPlugins = [ DatalabelsPlugin ];
  pieChartType: ChartType = 'pie';
  coursesPieChart: ChartData<'pie'>

  ngOnInit(): void {
    this.getCoursesData()
  }

  getCoursesData(){
    this.coursesService.getCoursesData().subscribe(data => {
      this.coursesResults = data    
      this.coursesPieChart = {
        labels: ['Finalizados', 'Em andamento'],
        datasets: [
          {
            data: [data.usersAndCourses.finished_courses, data.usersAndCourses.progress_courses],
          },
        ],
      };
      this.chart.update()
    }, error => {

    })
  }

}
