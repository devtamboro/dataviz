import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Nps, NpsResults } from 'src/app/models/nps';
import { NpsService } from 'src/app/services/nps/nps.service';

interface NpsData extends Nps {
  npsAvarage: number
}
@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss'],
})
export class NpsComponent implements OnInit {
  npsData: NpsData
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  doughnutChartType: ChartType = 'doughnut';
  /* variables with word 'base' were used to mount nps graph, not to set the real NPS value */
  doughnutChartBaseOptions: ChartConfiguration<'doughnut'>['options']

  public doughnutChartBaseData: ChartData<'doughnut'> = {
    labels: ['Péssimo', 'Médio', 'Bom', 'Ótimo'],
    datasets: [
      {
        rotation: 270,
        circumference: 180,
        data: [50, 25, 25],
        backgroundColor: [
          'rgba(231, 76, 60, 1)',
          'rgba(255, 164, 46, 1)',
          'rgba(46, 204, 113, 1)',
        ],
        borderColor: [
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
        rotation: 270,
        circumference: 180,
        data: [40, 25,  25],
        backgroundColor: [
          'rgba(231, 76, 60, 1)',
          'rgba(255, 164, 46, 1)',
          'rgba(46, 204, 113, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
          'rgba(255, 255, 255 ,1)',
        ],
        borderWidth: 5,
      },
    ],
  };

  get formattedAvarage() {
    return Math.round(this.npsData.npsAvarage * 100)
  }

  get avarageMessage() {
    const roundedScoreAvarage = this.npsData.npsAvarage * 10
    if(roundedScoreAvarage <= 5) {
      return 'Ruim'
    } else if (roundedScoreAvarage >5 && roundedScoreAvarage <=7.5) {
      return 'Neutro'
    }else {
      return 'Ótimo'
    }
  }

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

  constructor(
    private npsService: NpsService
  ) {}

  ngOnInit(): void {
    this.getNpsData()
  }

  getNpsAvarage(npsResults: NpsResults[], npsTotal: number):number {
    /* nps[{objKeys[objKeys.length - 1]] means user result which is the last key in those objs */
    return (npsResults.reduce((npsAcumulator, npsIndex) => {
      const objKeys = Object.keys(npsIndex);
      /* there's null values inside npsResults */
      const npsValue = isNaN(Number(npsIndex[`${objKeys[objKeys.length - 2]}`])) ? 0 : Number(npsIndex[`${objKeys[objKeys.length - 2]}`])
      return npsAcumulator + npsValue
    }, 0) / npsTotal)
  }

  getNpsData() {
    this.npsService.getNpsData().subscribe(nps => {
      /* max score is 10, so it is necessary to change scale to 100 */
      const npsAvarage = this.getNpsAvarage(nps.npsResults, nps.total) / 10
      this.npsData = {
        ...nps,
        npsAvarage
      }

      this.doughnutChartBaseOptions = {
        responsive: true,
        cutout: `80%`,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          onComplete: () => {
                  this.drawNeedle(-90, Math.round(180 * npsAvarage) * Math.PI / 180);
          }
        }
      };
      this.chart.update()
    }, error => {

    })
    
  }
}
