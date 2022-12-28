import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss'],
})
export class NpsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  doughnutChartType: ChartType = 'doughnut';

  /* variables with word 'base' were used to mount nps graph, not to set the real NPS value */
  doughnutChartBaseOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: '80%',
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      onComplete: () => {
              this.drawNeedle(150, -45 * Math.PI / 180);
      }
}
  };

  public doughnutChartBaseData: ChartData<'doughnut'> = {
    labels: ['Péssimo', 'Médio', 'Bom', 'Ótimo'],
    datasets: [
      {
        rotation: -90,
        circumference: 180,
        data: [40, 25, 15, 20],
        backgroundColor: [
          'rgba(231, 76, 60, 1)',
          'rgba(255, 164, 46, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(23, 162, 184, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
        ],
        borderWidth: 5,
      },
    ],
  };

  public doughnutChartNPSData: ChartData<'doughnut'> = {
    labels: ['', '', '', 'Ótimo'],
    datasets: [
      {
        rotation: -90,
        circumference: 180,
        data: [40, 25, 15, 20],
        backgroundColor: [
          'rgba(231, 76, 60, 1)',
          'rgba(255, 164, 46, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(23, 162, 184, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
        ],
        borderWidth: 5,
      },
    ],
  };

  drawNeedle(radius, radianAngle) {
    var canvas = document.getElementById("chartjs") as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');
    var cw = canvas.offsetWidth;
    var ch = canvas.offsetHeight;
    var cx = cw / 2;
    var cy = ch - (ch / 4);

    ctx.translate(cx, cy);
    ctx.rotate(radianAngle);
    ctx.beginPath();
    ctx.moveTo(0, -5);
    ctx.lineTo(radius, 0);
    ctx.lineTo(0, 5);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fill();
    ctx.rotate(-radianAngle);
    ctx.translate(-cx, -cy);
    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    ctx.fill();
}

  constructor() {}

  ngOnInit(): void {}
}
