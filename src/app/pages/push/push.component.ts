import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
})
export class PushComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  barChartOptions1: ChartConfiguration['options'] = {
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

  barChartOptions2: ChartConfiguration['options'] = {
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
  barChartData1: ChartData<'bar'> = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        data: [65, 59, 80, 120, 150, 200, 250, 250, 444, 200, 150, 111],
        backgroundColor: Array(12).fill('#008000'),
      },
    ],
  };

  barChartData2: ChartData<'bar'> = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        data: [80, 60, 80, 350, 300, 400, 750, 750, 800, 200, 150, 111],
        backgroundColor: Array(12).fill('#008000'),
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
