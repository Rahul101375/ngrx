import { Component, OnInit } from '@angular/core';
import { homePage, resource } from 'src/app/service/api_end_point';
import { IdhRepositoryDataService } from 'src/app/service/idhRepositoryData.service';
import { ResourceDataService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  resourceData: any = {};
  key: string[] = [];
  headers :string[] = ['term','definition']

  constructor(private resourceDataService : ResourceDataService,private idhRepositoryDataService : IdhRepositoryDataService) { }

  ngOnInit(): void {
    this.getCmsData();
    this.getCategoryData();
    this.getGlossaryData();
    
  }
  getCmsData() {
    let cms = this.idhRepositoryDataService.getList(homePage.USER_CMS)[1];
    cms.subscribe({
      next : (response)=>{
        this.resourceData.cms = response;
        this.key.push('cms');
        this.key = [... new Set(this.key)]
      },
      error : (error)=>{
        console.log("resource cms",error)
      }
    })
  }
  getCategoryData() {
    let category = this.idhRepositoryDataService.getCategoryList(homePage.USER_CATEGORY)[1];
    category.subscribe({
      next : (response)=>{
        this.resourceData.category = response;
        this.key.push('category');
        this.key = [... new Set(this.key)]
      },
      error : (error)=>{
        console.log("resource category",error)
      }
    })
  }
  getGlossaryData() {
    let glossary = this.resourceDataService.getGlossaryList(resource.USER_GLOSSARY)[1];
    glossary.subscribe({
      next : (response)=>{
        this.resourceData.glossary = response;
        this.key.push('glossary');
        this.key = [... new Set(this.key)]
      },
      error : (error)=>{
        console.log("resource glossary",error)
      }
    })
  }

}
