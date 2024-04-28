import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/service/api_end_point';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {
  ourPartnerData: any={};
  key: string[] = []

  constructor(private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    this.getCmsData()
  }
  getCmsData(){
    let basedOnId = '?sectionId=4'
    const userData$ = this.idhRepositoryDataService.getList(homePage.USER_CMS + basedOnId)[1];
    userData$.subscribe({
      next:(response:any)=>{
        this.ourPartnerData.cms=response;
        this.key.push('cms');
        this.key = [... new Set(this.key)]
      }
    }) 
  }
}
