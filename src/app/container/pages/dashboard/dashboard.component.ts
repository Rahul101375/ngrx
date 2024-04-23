import { Component, OnInit } from '@angular/core';
import { toggleButton } from 'src/app/models/dashboard';
import * as _ from 'lodash'
import { DashboardDataService } from 'src/app/service/dashboardRepositoryData.service';
import { dashboard } from 'src/app/service/api_end_point';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public toggleButtons : toggleButton[]= [
    {
      label:"programView",
      value : "programView",
      activeImage : "../../../../assets/dashboard/programview.svg",
      unActiveImage : "../../../../assets/dashboard/programview2.svg",
      active:true,
    },
    {
      label:"countryView",
      value : "countryView",
      activeImage : "../../../../assets/dashboard/countryview.svg",
      unActiveImage : "../../../../assets/dashboard/countryview2.svg",
      active:false,
    },
    {
      label:"ipView",
      value : "ipView",
      activeImage : "../../../../assets/dashboard/ipview2.svg",
      unActiveImage : "../../../../assets/dashboard/ipview.svg",
      active:false,
    },
    {
      label:"factoryView",
      value : "factoryView",
      activeImage : "../../../../assets/dashboard/factoryview2.svg",
      unActiveImage : "../../../../assets/dashboard/factoryview.svg",
      active:false,
    }
  ]
  public tabButton : any = [
    {
      programView : [
        {
          label : "impactSummary",
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "workerWelfare",
              active:true
            },
            {
              label : " womenEmpowerment ",
              active:false
            },
            {
              label : "ohs",
              active:false
            }
          ]
        },
        {
          label : "environmentalImpact",
          child:[
            {
              label : "energy",
              active:true
            },
            {
              label : " water ",
              active:false
            },
            {
              label : "chemical",
              active:false
            }
          ]
        }
      ],
      countryView : [
        {
          label : "impactSummary",
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "workerWelfare",
              active:true
            },
            {
              label : " womenEmpowerment ",
              active:false
            },
            {
              label : "ohs",
              active:false
            }
          ]
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "energy",
              active:true
            },
            {
              label : " water ",
              active:false
            },
            {
              label : "chemical",
              active:false
            }
          ]
        },
        {
          label:"ipList"
        },
        {
          label:"factoryList"
        }
      ],
      ipView : [
        {
          label : "impactSummary",
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "workerWelfare",
              active:true
            },
            {
              label : " womenEmpowerment ",
              active:false
            },
            {
              label : "ohs",
              active:false
            }
          ]
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "energy",
              active:true
            },
            {
              label : " water ",
              active:false
            },
            {
              label : "chemical",
              active:false
            }
          ]
        },
        {
          label:"factoryList"
        }
      ],
      factoryView : [
        {
          label : "impactSummary",
        },
        {
          label : "socialImpact",
          child:[
            {
              label : "workerWelfare",
              active:true
            },
            {
              label : " womenEmpowerment ",
              active:false
            },
            {
              label : "ohs",
              active:false
            }
          ]
        },
         {
          label : "socialImpact",
          child:[
            {
              label : "energy",
              active:true
            },
            {
              label : " water ",
              active:false
            },
            {
              label : "chemical",
              active:false
            }
          ]
         }
      ]
    }
  ]
  public child:any =[]
  dashboardData: any = {};
 
  constructor(private dashboardDataService:DashboardDataService) { }

  ngOnInit(): void {
    this.getPieData();
    this.getGroupBarData()
  }
  toggleAction(event:any){
    this.toggleButtons = _.map(this.toggleButtons,(el)=>{
      el.active = el.value === event.value;
      return el;
    })
    console.log("eve",event)
  }
  tabMenuAction(event:any){
    console.log("event",event);
    this.child = event
  }
  subToggleAction(event:any){
    this.child = _.map(this.child,(el)=>{
      el.active = el.label === event.label
      return el;
    })
  }
  getPieData(){
    const pie = this.dashboardDataService.getPieList(dashboard.programView.IMPACT_SUMMARY.PIE_CHART)[1];
    pie.subscribe({
      next : (response)=>{
        this.dashboardData.pie = response;
      },
      error : (error)=>{
        console.log("programView pie",error)
      }
    })
  }
  getGroupBarData(){
    const groupBar = this.dashboardDataService.getGroupBardList(dashboard.programView.IMPACT_SUMMARY.GROUP_BAR_CHART)[1];
    groupBar.subscribe({
      next : (response)=>{
        this.dashboardData.groupBar = response;
      },
      error : (error)=>{
        console.log("programView groupBar",error)
      }
    })
  }
}
