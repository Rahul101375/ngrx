import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import * as _ from "lodash"

Chart.register(...registerables)

type ChartData<T extends keyof ChartTypeRegistry, D extends any[], L extends any> = {
  labels: L;
  datasets: Array<{
    label: string;
    data: D;
  }>;
};

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input() groupBarChartId : string = ""
  @Input() groupBarData : any = [];
  constructor() { }

  ngOnInit(): void {
  }

  // time() {
  //   const ctx:any = document.getElementById('myChart');
  //   const myChart = new Chart(ctx, {
  //     type: "timeline",
  //     data: {
  //       labels: ['2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', '2019-06-01'],
  //       datasets: [
  //         {
  //           label: 'Group 1',
  //           data: [
  //             { x: '2019-01-01', y: '2019-01-10', label: 'Event 1' },
  //             { x: '2019-02-01', y: '2019-02-10', label: 'Event 2' },
  //             { x: '2019-03-01', y: '2019-03-10', label: 'Event 3' }
  //           ],
  //           backgroundColor: 'red'
  //         },
  //         {
  //           label: 'Group 2',
  //           data: [
  //             { x: '2019-04-01', y: '2019-04-10', label: 'Event 4' },
  //             { x: '2019-05-01', y: '2019-05-10', label: 'Event 5' },
  //             { x: '2019-06-01', y: '2019-06-10', label: 'Event 6' }
  //           ],
  //           backgroundColor: 'blue'
  //         }
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: 'time'
  //         },
  //         y: {
  //           type: 'linear'
  //         }
  //       }
  //     }
  //   });

  //   // myChart.render();
  // }
}
