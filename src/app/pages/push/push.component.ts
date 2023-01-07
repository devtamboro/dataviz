import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { PushService } from 'src/app/services/push/push.service';
import { NotificationsResults } from 'src/app/models/push';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
})
export class PushComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  notificationsLabels = []
  notificationsValues = []
  usersNotifiedLabels = []
  usersNotifiedValues = []
  notificationsResults: NotificationsResults
  

  notificationsBarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },

    plugins: {
      title: {
        display: true,
        position: 'top',
        text: 'Número de usuários notificados por mês',
      },
      legend: {
        display: false,
      },
    },
  };

  usersNotifiedBarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },

    plugins: {
      title: {
        display: true,
        position: 'top',
        text: 'Número de notificações enviadas por mês',
      },
      legend: {
        display: false,
      },
    },
  };

  barChartType: ChartType = 'bar';
  barChartPlugins = [DataLabelsPlugin];
  notificationsBarChart: ChartData<'bar'>
  usersNotifiedBarChart

  constructor(
    private pushService: PushService
  ) {}

  ngOnInit(): void {
    this.getPushData()
  }

  getPushData(){
    this.pushService.getNotificationsData().subscribe(data => {
      this.notificationsResults = data.notificationsData
      this.notificationsLabels = data.notificationsPerMonth.map(notifications => notifications.month)
      this.notificationsValues = data.notificationsPerMonth.map(notifications => notifications.count)

      this.usersNotifiedLabels = data.usersNotifiedPerMonth.map(notifications => notifications.month)
      this.usersNotifiedValues = data.usersNotifiedPerMonth.map(notifications => notifications.count)
      this.notificationsBarChart = {
        labels: this.notificationsLabels,
        datasets: [
          {
            data: this.notificationsValues,
            backgroundColor: Array(12).fill('#008000'),
          },
        ],
      };
    
      this.usersNotifiedBarChart = {
        labels: this.usersNotifiedLabels,
        datasets: [
          {
            data: this.notificationsValues,
            backgroundColor: Array(12).fill('#008000'),
          },
        ],
      };
      this.chart.update()
    }, error => {

    })
  }
}
