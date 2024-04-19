import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, forkJoin, map, zip } from 'rxjs';
import { homePage } from 'src/app/service/api_end_point';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users : any= []
  public start: number = 0;
  public end: number = 4;
  public otherDataRequiredInHome : any={};
  public endPoints = Object.values(homePage);
  public keyItem = ['cms', 'impactStory', 'category', 'card'];
  public  subscriptions: Subscription[] = [];
  constructor(private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    // this.fetchData();
    this.getCmsData();
    this.getCategoryData();
    this.getImpactStoryData();
    this.getCardData()
  }
 
//   fetchData() {
//     const observables = this.endPoints.map(endPoint => this.idhRepositoryDataService.getList(endPoint, true));
    
//     forkJoin(observables).subscribe({
//         next: (responses: any[]) => {
//             responses.forEach((res, i) => {
//                 this.otherDataRequiredInHome[this.keyItem[i]] = res;
//             });
//             console.log("this.otherDataRequiredInHome", this.otherDataRequiredInHome);
//         },
//         error: (error) => {
//             console.error("Error fetching data:", error);
//         }
//     });
// }
getCmsData(){
  const userData$ = this.idhRepositoryDataService.getList(homePage.USER_CMS)[1];
  userData$.subscribe({
    next:(response:any)=>{
      this.otherDataRequiredInHome.cms=response[0];
    }
  }) 
  console.log("this.otherDataRequiredInHome", this.otherDataRequiredInHome);
}
getCategoryData(){
  const userData$ = this.idhRepositoryDataService.getCategoryList(homePage.USER_CATEGORY)[1];
  userData$.subscribe({
    next:(response:any)=>{
      this.otherDataRequiredInHome.category=response[0];
    }
  }) 
  console.log("this.otherDataRequiredInHome", this.otherDataRequiredInHome);
}
getImpactStoryData(){
  const userData$ = this.idhRepositoryDataService.getImpactStoryList(homePage.USER_IMPACT_STORY)[1];
  userData$.subscribe({
    next:(response:any)=>{
      this.otherDataRequiredInHome.impactStory=response[0];
    }
  }) 
  console.log("this.otherDataRequiredInHome", this.otherDataRequiredInHome);
}
getCardData(){
  const userData$ = this.idhRepositoryDataService.getCardList(homePage.USER_PROGRAM_VIEW_IMPACT_SUMMARY_CARD)[1];
  userData$.subscribe({
    next:(response:any)=>{
      this.otherDataRequiredInHome.card=response[0];
    }
  }) 
  console.log("this.otherDataRequiredInHome", this.otherDataRequiredInHome);
}
  forwardImage(value:any){
    if((value.data.length - 4) >= this.end){
      this.start =this.end ;
      this.end += this.start;
    }
    else{
      console.log("not clickable",value.data.length,this.end,this.start)
    }
  }
  backImage(value:any){
    if((value.data.length - 4) >= this.start){
      this.end -= 4;
      this.start -= 4;
    }
    else{

    }
  }
  
}
