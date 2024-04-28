import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from "lodash"

Chart.register(...registerables)
@Component({
  selector: 'app-groupBar',
  templateUrl: './groupbar.component.html',
  styleUrls: ['./groupbar.component.scss']
})
export class GroupBarComponent implements OnInit {
  @Input() groupBarChartId: string = ""
  @Input() groupBarData: any = []
  @Input() type:string = ""
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.group();
    console.log("groupBarData", this.groupBarData)
    console.log("set", this.setData(this.groupBarData))
  }

  group() {
    Chart.defaults.datasets.bar.barThickness = 20;
    let id: any = document.getElementById(this.groupBarChartId)
    new Chart(id, {
      type: 'bar',
      options: {
        indexAxis: 'x',
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
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
            color: "white",
            // formatter: (value:any,context:any)=> {
            //   console.log("val",value);
            //   console.log("content",context)
            //   return context.dataset.financial_year;
            // }
          }
        },
      },
      data: {
        labels: this.setLabel(this.groupBarData),
        datasets: this.setData(this.groupBarData)
      }
    }
    );

  }
  setLabel(data: any) {
    return _.map(data, (el) => {
      return el.question_label
    })
  }
  setData(data: any) {
    console.log(this.type,this.groupBarData)
    let obj: any = {};
    _.forEach(data, (el) => {
      obj = _.map(el.values, (e, index) => {
          e.label = e.financial_year,
          e.data = e.total_count,
          e.backgroundColor = 'rgb(7 63 45)';
          e.stack = 'stack' + (index + 1)
        return e;
      })
    })
    
    return obj
  }
}
