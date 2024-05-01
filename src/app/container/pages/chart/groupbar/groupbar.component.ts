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
  @Input() type:string = "";
  public color : string[] = ['#00625F' ,'#08b8b2','#5b9795']
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
            stacked: true,
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6
            },
            // onClick: (e:any) => {
            //   console.log("el",e)
            //   const element = myChart.getElementAtEvent(e);
            //   console.log("el",e)
            //   if (element) {
            //     const index = element[0]._index;
            //     myChart.data.datasets[0].backgroundColor[index] = this.color[0];
            //     // myChart.update();
            //   }
            // }
          },
          datalabels: {
            color: "white",
            rotation : -90,
            textAlign:'center',
            formatter: (value:any,context:any)=> {
              return (parseFloat(context.dataset.data)).toLocaleString();
            }
          },
          // tooltip: {
          //   callbacks: {
          //     label: (context:any) => {
          //       console.log("tooltip",context)
          //       let label = context.dataset.label || '';
          //       if (label) {
          //         label += ': ';
          //       }
          //       label += context.parsed.y;
          //       return label;
          //     }
          //   }
          // }
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
      console.log("obj-1",el)
      obj = _.map(el.values, (e, index:number) => {
          e.label = e.financial_year,
          e.data = e.total_count,
          e.backgroundColor = this.color[index];
          e.stack = 'stack' + (index + 1)
        return e;
      })
    })
    console.log("map",obj)
    return obj
  }
}
