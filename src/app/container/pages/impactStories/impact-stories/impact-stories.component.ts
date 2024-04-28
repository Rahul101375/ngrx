import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/service/api_end_point';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';

@Component({
  selector: 'app-impact-stories',
  templateUrl: './impact-stories.component.html',
  styleUrls: ['./impact-stories.component.scss']
})
export class ImpactStoriesComponent implements OnInit {
  impactStoryData: any = {};
  key: string[] = [];
  
  constructor(private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    this.getCmsData()
    this.getImpactStoryData();
  }
  getImpactStoryData() {
    let impactStory = this.idhRepositoryDataService.getImpactStoryList(homePage.USER_IMPACT_STORY)[1];
    impactStory.subscribe({
      next : (response)=>{
        this.impactStoryData.impactStory = response;
        this.key.push('impactStory');
        this.key = [... new Set(this.key)]
      },
      error : (error)=>{
        console.log("impact ",error)
      }
    })
  }
 
  getCmsData(){
    let basedOnId = '?sectionId=12'
    const userData$ = this.idhRepositoryDataService.getList(homePage.USER_CMS + basedOnId)[1];
    userData$.subscribe({
      next:(response:any)=>{
        this.impactStoryData.cms=response;
        this.key.push('cms');
        this.key = [... new Set(this.key)]
      }
    }) 
  }
}
