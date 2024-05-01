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
  @Input() lineChartId : string = ""
  @Input() lineData : any = []
  public chart: Chart | undefined;
  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.line()
  }
  
  line() {
    this.chart = new Chart(this.lineChartId, {
      type: "bar",
      data: {
        labels: this.setLabel(this.lineData),
        datasets: this.setData(this.lineData)
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
            
          },
          y: {
            stacked: true,
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'left',
            onClick: (e:any)=>{
              e.stopPropagation()
            },
            labels: {
              usePointStyle: true,
              boxWidth: 6
            },
          },
          datalabels: {
            color: "white",
            textAlign:'center',
          },
        },
      }
      
      // options: {
      //   aspectRatio: 2.5,
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //       grid: {
      //         color: 'rgba(0, 0, 0, 0.1)',
      //       }
      //     },
      //     x: {
      //       grid: {
      //         color: 'rgba(0, 0, 0, 0.1)',
      //       }
      //     }
      //   },
      //   plugins: {
      //     tooltip: {
      //       backgroundColor: 'rgba(0, 0, 0, 0.7)',
      //       bodyFont: {
      //         size: 14,
      //       },
      //       titleFont: {
      //         size: 16,
      //         weight: 'bold',
      //       }
      //     },
      //     legend: {
      //       labels: {
      //         font: {
      //           size: 14,
      //         }
      //       }
      //     }
      //   ,
      //   }
      // }
    });
  }
  setData(data:any){
    let obj :any ={}
    console.log("obj-line",data)
   obj = _.map(data , (el)=>{
      el.data = [el.value],
      el.label = "Country",
      el.backgroundColor = '#00625F'
      return el;
    })
    console.log("data-line-obj",obj);
    return obj
  }
  setLabel(data:any){
    return _.map(data , (el)=>{
      return el.key
    })
  }
}
