import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/service/api_end_point';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any = {};
  key: string[]=[];

  constructor(private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    this.getCmsData()
  }
  getCmsData(){
    let basedOnId = '?sectionId=2'
    const userData$ = this.idhRepositoryDataService.getList(homePage.USER_CMS + basedOnId)[1];
    userData$.subscribe({
      next:(response:any)=>{
        this.aboutUsData.cms=response;
        this.key.push('cms');
        this.key = [... new Set(this.key)]
      }
    }) 
  }
}
