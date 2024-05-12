import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil, tap } from 'rxjs/operators';
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

@Injectable()
export class ResourceEffects {
  constructor(private actions$: Actions, private httpService: HttpService) { }
  // updateUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ResourceViewAction.resourceSubCategoryReportLoad),
  //     switchMap(() =>
  //       this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT+'1').pipe(map((res) => ResourceViewAction.resourceSubCategoryReportSuccess({ subCategoryReport: res })))
  //       // catchError((error) => of(ResourceViewAction.resourceSubCategoryReportFailed({ error: error })))
  //     )
  //   ),
  // );
  subCategoryReport$ = createEffect(()=> this.actions$.pipe(
    ofType(ResourceViewAction.resourceSubCategoryReportLoad),
    exhaustMap(()=>this.httpService.getMethod(resource.USER_SUBCATEGORY_REPORT+'1').pipe(
      map((subCategoryReport)=>ResourceViewAction.resourceSubCategoryReportSuccess({subCategoryReport}))
    ))
  ))
}