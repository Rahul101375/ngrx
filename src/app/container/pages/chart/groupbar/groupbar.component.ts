import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as _ from "lodash"

Chart.register(...registerables)
@Component({
  selector: 'app-groupbar',
  templateUrl: './groupbar.component.html',
  styleUrls: ['./groupbar.component.scss']
})
export class GroupBarComponent implements OnInit {
 @Input() groupBarChartId : string = ""
 @Input() groupBarData : any = []
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.group();
    console.log("groupBarData",this.groupBarData)
    console.log("set",this.setData(this.groupBarData))
  }
  group(){
    let id:any = document.getElementById(this.groupBarChartId) 
    new Chart(id,{
        type: 'bar',
        options: {
          indexAxis: 'x',
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true
            }
          },
          plugins: {
            legend: {
              display: true
            }
          },
        },
        
        data: {
          labels:this.setLabel(this.groupBarData),
          datasets : this.setData(this.groupBarData)
        }
      }
    );
    
  }
  setLabel(data:any){
    return _.map(data,(el)=>{
      return el.question_label
    })
  }
  setData(data:any){
    let obj:any = {};
    _.forEach(data,(el)=>{
        obj = _.map(el.values,(e)=>{
          e.data = e.total_count,
          e.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
          return e;
        })
    })
    return obj
  }
}
