import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, catchError, combineLatest, filter, of, switchMap, tap } from "rxjs";
import { ApiService } from 'src/app/service/api.service';
import { Subscription } from 'rxjs';
import { RootReducerState, getProgramViewImpactGroupBar, getProgramViewImpactGroupBarLoaded, getProgramViewImpactGroupBarLoading, getProgramViewImpactPie, getProgramViewImpactPieLoaded, getProgramViewImpactPieLoading } from "../reducers";
import { User } from "../models/user";
import { ProgramViewImpactListRequestActionGroupBar, ProgramViewImpactListRequestActionPie, ProgramViewImpactSuccessRequestActionGroupBar, ProgramViewImpactSuccessRequestActionPie } from "../actions/dashboard-action";



@Injectable({
    providedIn: 'root'
})

export class DashboardDataService {
    public subscriptions: Subscription[] = [];
    constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
    }
    getPieList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewImpactPieLoading);
        const loaded$ = this.store.select(getProgramViewImpactPieLoaded);
        const getPieData = this.store.select(getProgramViewImpactPie);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (((!data[0] && !data[1])) || force) {
                this.store.dispatch(new ProgramViewImpactListRequestActionPie())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewImpactSuccessRequestActionPie({ data: res }))
                })
            }
        })
        return [loaded$, getPieData]
    }

    getGroupBardList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewImpactGroupBarLoading);
        const loaded$ = this.store.select(getProgramViewImpactGroupBarLoaded);
        const getGroupBarData = this.store.select(getProgramViewImpactGroupBar);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewImpactListRequestActionGroupBar())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewImpactSuccessRequestActionGroupBar({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }

}