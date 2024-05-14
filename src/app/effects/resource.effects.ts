import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import {
  Actions,
  OnRunEffects,
  EffectNotification,
  ofType,
  createEffect,
} from '@ngrx/effects';
import * as ResourceViewAction from './../actions/resource-view-action'
import { HttpService } from '../service/http.service';
import { resource } from '../service/api_end_point';
import { Store } from '@ngrx/store';
// import { selectAllResourceSubcategoryReportData } from '../selector/resource-view.selector';

@Injectable()
export class ResourceEffects {

  // updateUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //     switchMap(() =>
  //       this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT+'1').pipe(map((res) => ResourceViewAction.resourceSubCategoryReportSuccess({ subCategoryReport: res })))
  //       // catchError((error) => of(ResourceViewAction.resourceSubCategoryReportFailed({ error: error })))
  //     )
  //   ),
  // );
  // subCategoryReport$ = createEffect(()=> this.actions$.pipe(
  //   ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //   exhaustMap(()=>this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT+'1').pipe(
  //     map((subCategoryReport)=>ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport}))
  //   ))
  // ))


  // subCategoryReport$ = createEffect(()=>{
  //   return this.actions$.pipe(
  //     ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //     mergeMap(()=>{
  //       return this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT+'1').pipe(
  //         map((subCategoryReport)=>{
  //           console.log("subCategoryReport-effects",subCategoryReport)
  //           return ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport})
  //         })
  //       )
  //     })
  //   )
  // },{dispatch:false})
  // subCategoryReport$ = createEffect(()=>
  // this.actions$.pipe(
  //   ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //   exhaustMap((action)=>{
  //     console.log("effects",action)
  //     return this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT + '1').pipe(
  //       map((data)=>{
  //         console.log("effects",data)
  //         return ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport : data})
  //       })
  //     )
  //   })
  // )
  // )

  // subCategoryReport$ = createEffect(()=>this.actions$.pipe(
  //   ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //   switchMap((params:any)=>{
  //     console.log("action",params )
  //     return this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT + '1').pipe(
  //       map(data=>{
  //         return ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport : data})
  //       })
  //     )
  //   })
  // ))
  // subCategoryReport$ = createEffect(()=>this.actions$.pipe(
  //   ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //   withLatestFrom(this.store.select(selectAllResourceSubcategoryReportData)),
  //   switchMap((action)=>{
  //     console.log("ac",action)
  //     const perviousData = action[1];
  //     if(perviousData != null){
  //       return of(ResourceViewAction.resourceSubCategoryReportSuccess({
  //         subCategoryReport : perviousData
  //       }))
  //     }
  //     return this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT + '1').pipe(
  //       map((data)=> ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport:data}))
  //     )
  //   })
  // ))
  subCategoryReport$ = createEffect(()=>this.actions$.pipe(
    ofType(ResourceViewAction.resourceSubCategoryReportLoad),
    switchMap((params:any)=>{
      console.log("action",params )
      return this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT + '1').pipe(
        switchMap((data)=>{
          return [ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport:data})]
        })
      )
    })
  ))
  constructor(private actions$: Actions, private httpService: HttpService,public store:Store) { }
}