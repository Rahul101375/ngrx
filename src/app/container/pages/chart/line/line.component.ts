import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from "lodash"

Chart.register(...registerables)
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() groupBarChartId : string = ""
  @Input() groupBarData : any = []
  public chart: Chart | undefined;
  constructor() { }

  
  ngOnInit() {
    console.log("line",this.groupBarData)
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgb(0, 133, 90)',
            ],
            borderColor: [
              'rgb(0, 133, 90)',
            ],
            borderWidth: 1
          }
        ]
      },
      // options: {
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           beginAtZero: true
      //         }
      //       }
      //     ]
      //   }
      // }
    });
  }
  setData(data:any){
    return _.map(data , (el)=>{
      return
    })
  }
}
