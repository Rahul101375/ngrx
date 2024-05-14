import { Component, OnInit } from '@angular/core';
import { resource } from 'src/app/service/api_end_point';
import { HttpService } from 'src/app/service/http.service';
import { ResourceDataService } from 'src/app/service/resource.service';


@Component({
  selector: 'app-resource-views',
  templateUrl: './resource-views.component.html',
  styleUrls: ['./resource-views.component.scss']
})
export class ResourceViewsComponent implements OnInit {
  public categoryName: string = ''
  public categoryId: string = ''
  resourceViewData: any = [];
  currentTab: any;
  resourceReport: any;
  constructor(private httpService: HttpService, private resourceService: ResourceDataService) { }

  ngOnInit(): void {
    let { id, name } = this.httpService.getRouterInformation().snapshot.queryParams;
    this.categoryId = id;
    this.categoryName = name;
    this.getSubcategoryData(this.categoryId)

  }

  getSubcategoryData(categoryId: string) {
    let response$ = this.resourceService.getSubCategoryList(resource.USER_SUBCATEGORY + categoryId)[1];
    response$.subscribe({
      next: (res: any) => {
        console.log("resource-view", res[0].data)
        this.resourceViewData = res[0].data;
        this.httpService.updateSnackBarData(res[0].message)
      },
      error: (error) => {
        console.log("resource-view", error);
        this.httpService.updateSnackBarData(error.error.message)
      }
    })
  }
  resourceDownload(subCategoryReportId: string) {
    this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT + subCategoryReportId).subscribe({
      next: (res: any) => {
        this.resourceReport = res.data;
        this.httpService.updateSnackBarData(res.message)
      },
      error: (error) => {
        console.log("resource-view", error);
        this.httpService.updateSnackBarData(error.error.message)
      }
    })
  }
}

