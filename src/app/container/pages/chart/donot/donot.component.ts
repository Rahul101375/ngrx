import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-donot',
  templateUrl: './donot.component.html',
  styleUrls: ['./donot.component.scss']
})
export class DonotComponent implements OnInit {
  @Input() donutChartId : string = ""
 @Input() donutData : any = []
  @ViewChild('theDonutCanvas') private donutCanvas!: ElementRef;
  donutChart: any;
  constructor() { }

  ngOnInit(): void {
    this.doTheDonut()
  }

  doTheDonut() {
  this.donutChart = new Chart(this.donutCanvas.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Solicitado', 'Entregado', 'Faltante'],
      datasets: [
        {
          label: 'test',
          data: [
            100, 200, 300
          ],
          backgroundColor: ['#0074D9', '#2ECC40', '#FF4136']
        }
      ]
    },
    options: {
      // title: {
      //   display: false,
      //   text: 'Color test'
      // },
      // legend: {
      //   position: 'left',
      //   display: true,
      //   fullWidth: true,
      //   labels: {
      //     fontSize: 11
      //   }
      // },
      // scales: {
      //   xAxes: [{
      //     display: true
      //   }],
      //   yAxes: [{
      //     display: true
      //   }]
      // }
    }

  });
}
}
