import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from 'lodash'

Chart.register(...registerables)

@Component({
  selector: 'app-donut',
  templateUrl: './donot.component.html',
  styleUrls: ['./donot.component.scss']
})
export class DonotComponent implements OnInit {
  @Input() donutChartId : string = ""
 @Input() donutData : any = []
color :any = ['rgb(0, 133, 90)','rgb(254, 215, 102)',]
  constructor() { }

  ngOnInit(): void {
   
  }
ngAfterViewInit(){
  console.log("donut",this.donutData)
  this.doTheDonut()
}
  doTheDonut() {
  let id:any = document.getElementById(this.donutChartId)
   new Chart(id, {
    type: 'doughnut',
    data: {
      // labels: ['Solicited', 'Entreat', 'Falange'],
      labels : this.setLabel(this.donutData),
      // datasets: [
      //   {
      //     label: 'test',
      //     data: [
      //       100, 200, 300
      //     ],
      //     backgroundColor: ['rgb(0, 133, 90)',
      //     'rgb(254, 215, 102)',]
      //   }
      // ]
      datasets : this.setData(this.donutData)
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: 30,// Adjust the cutout percentage here
      radius: 200,
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
              return `${(parseFloat(value)).toLocaleString()} (${percentage})`;
          },
          color: '#fff',
          font: {
            weight: 'bold',
            size: 12,
          }
      },
        
      },
    }

  });
}
setData(data: any) {
  
  let obj:any={
    label : '',
    data: [],
    backgroundColor:[]
  }
   obj = _.map(data, (e, index) => {
          // if(!obj.label){
          //   obj.label = e.question_label,
          //   obj.data.push(e.total_count),
          //   obj.backgroundColor.push(this.color[index])
          // }
          // else {
          //   obj.data.push(e.total_count),
          //   obj.backgroundColor.push(this.color[index])
          // }
          obj.label = e.question_label,
            obj.data.push(e.total_count),
            obj.backgroundColor.push(this.color[index])
      return obj;
    })
    console.log("pie-obj",obj);
    return obj;
}
setLabel(data:any):any{
 return _.map(data,(el)=>{
    return el.question_label      
  })
}
}

