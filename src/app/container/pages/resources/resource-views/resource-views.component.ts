import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResourceSubCategoryReportListRequest } from 'src/app/actions/resource-action';
import { resource } from 'src/app/service/api_end_point';
import { HttpService } from 'src/app/service/http.service';
import { ResourceDataService } from 'src/app/service/resource.service';
import * as ResourceViewAction from '../../../../actions/resource-view-action';
import * as ResourceViewSelector from '../../../../selector/resource-view.selector'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-resource-views',
  templateUrl: './resource-views.component.html',
  styleUrls: ['./resource-views.component.scss']
})
export class ResourceViewsComponent implements OnInit {
  public categoryName:string = ''
  public categoryId:string = ''
  resourceViewData: any=[];
  currentTab: any;
  product$: Observable<any> | undefined;
  constructor(private httpService:HttpService,private resourceService:ResourceDataService,private store:Store<any>) { }

  ngOnInit(): void {
    let {id,name}=this.httpService.getRouterInformation().snapshot.queryParams;
    this.categoryId = id;
    this.categoryName = name;
    this.getSubcategoryData(this.categoryId)
    this.implementStore()
  }
  implementStore() {
   this.store.dispatch(ResourceViewAction.resourceSubCategoryReportLoad());
   this.product$ = this.store.select(ResourceViewSelector.selectAllResourceSubcategoryReportData);
   console.log("product",this.product$)
   this.product$.pipe(map((res:any)=>console.log("product",res)))
  }
  getSubcategoryData(categoryId: string) {
    let response$ = this.resourceService.getSubCategoryList(resource.USER_SUBCATEGORY+categoryId)[1];
    response$.subscribe({
      next : (res:any)=>{
        console.log("resource-view",res[0].data)
        this.resourceViewData = res[0].data;
        this.httpService.updateSnackBarData(res[0].message)
      },
      error: (error)=>{
        console.log("resource-view",error);
        this.httpService.updateSnackBarData(error.error.message)
      }
    })
  }

}
function getResourceSubCategoryReportLoadingForData(state: object) {
  throw new Error('Function not implemented.');
}

