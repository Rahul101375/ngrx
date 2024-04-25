import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, catchError, combineLatest, filter, of, switchMap, tap } from "rxjs";
import { ApiService } from 'src/app/service/api.service';
import { Subscription } from 'rxjs';
import { RootReducerState, getCountry, getCountryLoaded, getCountryLoading, getProgramViewEnvironmentalDonut, getProgramViewEnvironmentalDonutLoaded, getProgramViewEnvironmentalDonutLoading, getProgramViewEnvironmentalGroupBar, getProgramViewEnvironmentalGroupBarLoaded, getProgramViewEnvironmentalGroupBarLoading, getProgramViewEnvironmentalPie, getProgramViewEnvironmentalPieLoaded, getProgramViewEnvironmentalPieLoading, getProgramViewEnvironmentalTimeLine, getProgramViewEnvironmentalTimeLineLoaded, getProgramViewEnvironmentalTimeLineLoading, getProgramViewImpactCard, getProgramViewImpactCardLoaded, getProgramViewImpactCardLoading, getProgramViewImpactGroupBar, getProgramViewImpactGroupBarLoaded, getProgramViewImpactGroupBarLoading, getProgramViewImpactIpsa, getProgramViewImpactIpsaLoaded, getProgramViewImpactIpsaLoading, getProgramViewImpactPie, getProgramViewImpactPieLoaded, getProgramViewImpactPieLoading, getProgramViewSocialCard, getProgramViewSocialCardLoaded, getProgramViewSocialCardLoading, getProgramViewSocialGroupBarSocialGroupBar, getProgramViewSocialGroupBarSocialGroupBarLoaded, getProgramViewSocialGroupBarSocialGroupBarLoading, getProgramViewSocialGroupBarSocialPie, getProgramViewSocialGroupBarSocialPieLoaded, getProgramViewSocialGroupBarSocialPieLoading, getProgramViewSocialTimeLine, getProgramViewSocialTimeLineLoaded, getProgramViewSocialTimeLineLoading } from "../reducers";
import { User } from "../models/user";
import { CountryListRequestAction, CountrySuccessRequestAction, ProgramViewEnvironmentalListRequestActionDonut, ProgramViewEnvironmentalListRequestActionGroupBar, ProgramViewEnvironmentalListRequestActionPie, ProgramViewEnvironmentalListRequestActionTimeLine, ProgramViewEnvironmentalSuccessRequestActionDonut, ProgramViewEnvironmentalSuccessRequestActionGroupBar, ProgramViewEnvironmentalSuccessRequestActionPie, ProgramViewEnvironmentalSuccessRequestActionTimeLine, ProgramViewImpactListRequestActionCard, ProgramViewImpactListRequestActionGroupBar, ProgramViewImpactListRequestActionIpsa, ProgramViewImpactListRequestActionPie, ProgramViewImpactSuccessRequestActionCard, ProgramViewImpactSuccessRequestActionGroupBar, ProgramViewImpactSuccessRequestActionIpsa, ProgramViewImpactSuccessRequestActionPie, ProgramViewSocialListRequestActionCard, ProgramViewSocialListRequestActionGroupBar, ProgramViewSocialListRequestActionPie, ProgramViewSocialListRequestActionTimeLine, ProgramViewSocialSuccessRequestActionCard, ProgramViewSocialSuccessRequestActionGroupBar, ProgramViewSocialSuccessRequestActionPie, ProgramViewSocialSuccessRequestActionTimeLine } from "../actions/dashboard-action";
import { getCountryDataForCountry } from "../reducers/daashboard-reducer";



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

    getProgramViewCardList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewImpactCardLoading);
        const loaded$ = this.store.select(getProgramViewImpactCardLoaded);
        const getPieData = this.store.select(getProgramViewImpactCard);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (((!data[0] && !data[1])) || force) {
                this.store.dispatch(new ProgramViewImpactListRequestActionCard())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewImpactSuccessRequestActionCard({ data: res }))
                })
            }
        })
        return [loaded$, getPieData]
    }

    getProgramViewIpsaList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewImpactIpsaLoading);
        const loaded$ = this.store.select(getProgramViewImpactIpsaLoaded);
        const getPieData = this.store.select(getProgramViewImpactIpsa);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (((!data[0] && !data[1])) || force) {
                this.store.dispatch(new ProgramViewImpactListRequestActionIpsa())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewImpactSuccessRequestActionIpsa({ data: res }))
                })
            }
        })
        return [loaded$, getPieData]
    }

    getCountryList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getCountryLoading);
        const loaded$ = this.store.select(getCountryLoaded);
        const getPieData = this.store.select(getCountry);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (((!data[0] && !data[1])) || force) {
                this.store.dispatch(new CountryListRequestAction())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new CountrySuccessRequestAction({ data: res }))
                })
            }
        })
        return [loaded$, getPieData]
    }



    getProgramViewSocialPieList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewSocialGroupBarSocialPieLoading);
        const loaded$ = this.store.select(getProgramViewSocialGroupBarSocialPieLoaded);
        const getGroupBarData = this.store.select(getProgramViewSocialGroupBarSocialPie);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewSocialListRequestActionPie())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewSocialSuccessRequestActionPie({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }
    getProgramViewSocialTimeLineList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewSocialTimeLineLoading);
        const loaded$ = this.store.select(getProgramViewSocialTimeLineLoaded);
        const getGroupBarData = this.store.select(getProgramViewSocialTimeLine);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewSocialListRequestActionTimeLine())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewSocialSuccessRequestActionTimeLine({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }
    getProgramViewSocialGroupBarList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewSocialGroupBarSocialGroupBarLoading);
        const loaded$ = this.store.select(getProgramViewSocialGroupBarSocialGroupBarLoaded);
        const getGroupBarData = this.store.select(getProgramViewSocialGroupBarSocialGroupBar);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewSocialListRequestActionGroupBar())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewSocialSuccessRequestActionGroupBar({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }
    getProgramViewSocialCardList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewSocialCardLoading);
        const loaded$ = this.store.select(getProgramViewSocialCardLoaded);
        const getGroupBarData = this.store.select(getProgramViewSocialCard);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewSocialListRequestActionCard())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewSocialSuccessRequestActionCard({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }

    getProgramViewEnvironmentalGroupBarList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewEnvironmentalGroupBarLoading);
        const loaded$ = this.store.select(getProgramViewEnvironmentalGroupBarLoaded);
        const getGroupBarData = this.store.select(getProgramViewEnvironmentalGroupBar);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewEnvironmentalListRequestActionGroupBar())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewEnvironmentalSuccessRequestActionGroupBar({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }

    getProgramViewEnvironmentalPieList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewEnvironmentalPieLoading);
        const loaded$ = this.store.select(getProgramViewEnvironmentalPieLoaded);
        const getGroupBarData = this.store.select(getProgramViewEnvironmentalPie);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewEnvironmentalListRequestActionPie())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewEnvironmentalSuccessRequestActionPie({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }

    getProgramViewEnvironmentalTimeLineList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewEnvironmentalTimeLineLoading);
        const loaded$ = this.store.select(getProgramViewEnvironmentalTimeLineLoaded);
        const getGroupBarData = this.store.select(getProgramViewEnvironmentalTimeLine);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewEnvironmentalListRequestActionTimeLine())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewEnvironmentalSuccessRequestActionTimeLine({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }
    getProgramViewEnvironmentalDonutList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getProgramViewEnvironmentalDonutLoading);
        const loaded$ = this.store.select(getProgramViewEnvironmentalDonutLoaded);
        const getGroupBarData = this.store.select(getProgramViewEnvironmentalDonut);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProgramViewEnvironmentalListRequestActionDonut())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ProgramViewEnvironmentalSuccessRequestActionDonut({ data: res }))
                })
            }
        })
        return [loaded$, getGroupBarData]
    }
    
}