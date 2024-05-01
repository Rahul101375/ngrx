import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from "lodash"

Chart.register(...registerables)

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input() chartId : string = ""
  @Input() chartData : any = [];
  @Input() chartLabel :string = "";
  public color : string[] = ['#00625F' ,'#08b8b2','#5b9795']
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.time()
  }

  time() {
    const ctx:any = document.getElementById(this.chartId);
     new Chart(ctx, {
      type: "bar",
      data: {
        labels: [this.chartLabel],
        // datasets: [
        //   {
        //     label: 'Group 1',
        //     data: [2,4,6],
        //     backgroundColor: 'red'
        //   },
        //   {
        //     label: 'Group 2',
        //     data: [10,20,30],
        //     backgroundColor: 'blue'
        //   }
        // ]
        // datasets : _.map(this.chartData, (el,index:number)=>{
        //    if(el.financial_year === '2021'){
        //     el.label = '2021';
        //     el.data.push(el.total_count);
        //     el.backgroundColor = this.color[index];
        //     el.stack = 'stack' + (index+1);
        //    }
        //    if(el.financial_year === '2022'){
        //     el.label = '2022';
        //     el.data.push(el.total_count);
        //     el.backgroundColor = this.color[index];
        //     el.stack = 'stack' + (index+1);
        //    }
        //    if(el.financial_year === '2023'){
        //     el.label = '2023';
        //     el.data.push(el.total_count);
        //     el.backgroundColor = this.color[index];
        //     el.stack = 'stack' + (index+1);
        //    }if(el.financial_year === '2024'){
        //     el.label = '2024';
        //     el.data.push(el.total_count);
        //     el.backgroundColor = this.color[index];
        //     el.stack = 'stack' + (index+1);
        //    }
        //    return el;
        // })
        datasets : this.setData(this.chartData)
      },
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
          },
          datalabels: {
            color: "white",
            rotation : -90,
            textAlign:'center',
            formatter: (value:any,context:any)=> {
              return (parseFloat(context.dataset.data)).toLocaleString();
            }
          },
        },
      },
    });
  }
  setData(data:any){
   return _.map(data ,(el,index:number)=>{
    el.data = el.total_count;
    el.label = el.financial_year,
    el.stack = 'stack' + (index+1);
    el.backgroundColor = this.color[index]
    delete el.total_count,
    delete el.financial_year
    console.log("timeline chart data",data)
    return el
  })
  
  }
}
