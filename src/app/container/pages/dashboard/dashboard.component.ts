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
  currentTab :string[] = []
  constructor(private dashboardDataService:DashboardDataService) { }

  ngOnInit(): void {
    this.getPieData();
    this.getGroupBarData();
    this.getCardData();
    this.getIpsaData();
    this.getCountryData()
  }
  toggleAction(event:any){
    this.toggleButtons = _.map(this.toggleButtons,(el)=>{
      el.active = el.value === event.value;
      return el;
    })
    console.log("eve",event)
  }
  tabMenuAction(event:any){
    console.log("eve",event)
    this.child = event.chields;
    if(event.index == 1 ){
      this.programSocialImpactCard();
    this.programSocialImpactPie();
    this.programSocialImpactTimeLine();
    this.programSocialImpactGroupBar();
    }
    else{
      this.programEnvironmentalDonut();
    this.programEnvironmentalPie();
    this.programEnvironmentalTimeLine();
    this.programEnvironmentalGroupBar();
    }
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
        this.currentTab.push("pie");
        this.currentTab = [... new Set(this.currentTab)]
      },
      error : (error)=>{
        console.log("programView pie",error)
      }
    })
  }
  getGroupBarData(){
    let extra = '?from=&to=&is_month=false'
    const groupBar = this.dashboardDataService.getGroupBardList(dashboard.programView.IMPACT_SUMMARY.GROUP_BAR_CHART+extra)[1];
    groupBar.subscribe({
      next : (response)=>{
        this.dashboardData.groupBar = response;
        this.currentTab.push("groupBar");
        this.currentTab = [... new Set(this.currentTab)]
      },
      error : (error)=>{
        console.log("programView groupBar",error)
      }
    })
  }
  getCardData(){
    const programViewCard = this.dashboardDataService.getProgramViewCardList(dashboard.programView.IMPACT_SUMMARY.CARD)[1];
    programViewCard.subscribe({
      next : (response)=>{
        this.dashboardData.programViewCard = response;
        this.currentTab.push("programViewCard");
        this.currentTab = [... new Set(this.currentTab)]
      },
      error : (error)=>{
        console.log("programViewCard",error)
      }
    })
  }
  getIpsaData(){
    const programViewIpsa = this.dashboardDataService.getProgramViewIpsaList(dashboard.programView.IMPACT_SUMMARY.IPSA)[1];
    programViewIpsa.subscribe({
      next : (response)=>{
        this.dashboardData.programViewIpsa = response;
        this.currentTab.push("programViewIpsa");
        this.currentTab = [... new Set(this.currentTab)]
      },
      error : (error)=>{
        console.log("programView pie",error)
      }
    })
  }
  getCountryData(){
    const country = this.dashboardDataService.getCountryList(dashboard.COUNTRY_LIST)[1];
    country.subscribe({
      next : (response)=>{
        this.dashboardData.country = response;
        this.currentTab.push("country");
        this.currentTab = [... new Set(this.currentTab)]
      },
      error : (error)=>{
        console.log("country pie",error)
      }
    })
  }
  programSocialImpactCard(){
    let programViewSocialCard = this.dashboardDataService.getProgramViewSocialCardList(dashboard.programView.SOCIAL_IMPACT.CARD_CHART)[1];
    programViewSocialCard.subscribe({
      next : (response)=>{
        this.dashboardData.socialCard = response;
        this.currentTab.push("socialCard");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
  programSocialImpactPie(){
    let programViewSocialPie = this.dashboardDataService.getProgramViewSocialPieList(dashboard.programView.SOCIAL_IMPACT.PIE_CHART)[1];
    programViewSocialPie.subscribe({
      next : (response)=>{
        this.dashboardData.socialPie = response;
        this.currentTab.push("socialPie");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
  programSocialImpactTimeLine(){
    let programViewSocialTimeLine = this.dashboardDataService.getProgramViewSocialTimeLineList(dashboard.programView.SOCIAL_IMPACT.TIME_LINE_CHART)[1];
    programViewSocialTimeLine.subscribe({
      next : (response)=>{
        this.dashboardData.socialTimeLine = response;
        this.currentTab.push("socialTimeLine");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
  programSocialImpactGroupBar(){
    let programViewSocialGroupBar = this.dashboardDataService.getProgramViewSocialGroupBarList(dashboard.programView.SOCIAL_IMPACT.GROUP_BAR_CHART)[1];
    programViewSocialGroupBar.subscribe({
      next : (response)=>{
        this.dashboardData.socialGroupBar = response;
        this.currentTab.push("socialGroupBar");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
 programEnvironmentalDonut(){
  let programEnvironmentalDonut = this.dashboardDataService.getProgramViewEnvironmentalDonutList(dashboard.programView.ENVIRONMENT_IMPACT.DONUT_CHART)[1];
  programEnvironmentalDonut.subscribe({
    next : (response)=>{
      this.dashboardData.environmentalDonut = response;
      this.currentTab.push("environmentalDonut");
      this.currentTab = [... new Set(this.currentTab)]
    }
  })
 }
  programEnvironmentalPie(){
    let programViewEnvironmentalPie = this.dashboardDataService.getProgramViewEnvironmentalPieList(dashboard.programView.ENVIRONMENT_IMPACT.PIE_CHART)[1];
    programViewEnvironmentalPie.subscribe({
      next : (response)=>{
        this.dashboardData.environmentalPie = response;
        this.currentTab.push("environmentalPie");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
  programEnvironmentalTimeLine(){
    let programViewEnvironmentalTimeLine = this.dashboardDataService.getProgramViewEnvironmentalTimeLineList(dashboard.programView.ENVIRONMENT_IMPACT.TIMELINE_CHART)[1];
    programViewEnvironmentalTimeLine.subscribe({
      next : (response)=>{
        this.dashboardData.environmentalTimeLine = response;
        this.currentTab.push("environmentalTimeLine");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
  programEnvironmentalGroupBar(){
    let programViewEnvironmentalGroupBar = this.dashboardDataService.getProgramViewEnvironmentalGroupBarList(dashboard.programView.ENVIRONMENT_IMPACT.GROUP_BAR_CHART)[1];
    programViewEnvironmentalGroupBar.subscribe({
      next : (response)=>{
        this.dashboardData.environmentalGroupBar = response;
        this.currentTab.push("environmentalGroupBar");
        this.currentTab = [... new Set(this.currentTab)]
      }
    })
  }
}
