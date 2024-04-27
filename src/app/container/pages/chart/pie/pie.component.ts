import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from "lodash";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables)
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() pieData :any = []
  @Input() pieChartId : string = ""
  donutChart: any;
  constructor() { }
  ngOnInit(): void {
    // this.pie()
  }
  ngAfterViewInit() {
    this.pie()
  }
  pie() {
    console.log("pie",this.pieChartId);
    console.log("pie data",this.pieData);
    Chart.register(ChartDataLabels)
    let canvas: any = document.getElementById(this.pieChartId);
    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: this.setLabel(this.pieData),
        datasets: [{
          data: this.setData(this.pieData),
          backgroundColor: [
            'rgb(0, 133, 90)',
            'rgb(254, 215, 102)',
            
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6
            }
          },
          datalabels: {
            formatter: (value:any, ctx:any) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((data:any) => {
                    sum += parseInt(data,10);
                });
                console.log("sum",sum)
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return `${parseFloat(value)} (${percentage})`;
            },
            color: '#fff',
            font: {
              weight: 'bold',
              size: 16,
            }
        },
          
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
      }
    });
  }

  setData(data:any):any{
    return _.map(data,(el)=>{
      return el.total_count
    })
  }
  setLabel(data:any):any{
   return _.map(data,(el)=>{
      return el.question_label      
    })
  }


}
