import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootReducerState, getCardUserLoaded, getCardUserLoading, getCardUsers, getCategoryUserLoaded, getCategoryUserLoading, getCategoryUsers, getCmsUserLoaded, getCmsUserLoading, getCmsUsers, getImpactStoryUserLoaded, getImpactStoryUserLoading, getImpactStoryUsers } from "../reducers";
import { Observable, catchError, combineLatest, filter, of, switchMap, tap } from "rxjs";
import { UserListRequestActionCard, UserListRequestActionCategory, UserListRequestActionCms, UserListRequestActionImpactStory, UserListSuccessActionCard, UserListSuccessActionCategory, UserListSuccessActionCms, UserListSuccessActionImpactStory } from "../actions/user-action";
import { ApiService } from 'src/app/service/api.service';
import { User } from "../models/user";
import { Subscription } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class IdhRepositoryDataService {
    public subscriptions: Subscription[] = [];
    constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
    }
    getList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getCmsUserLoading);
        const loaded$ = this.store.select(getCmsUserLoaded);
        const getUserData = this.store.select(getCmsUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if (((!data[0] && !data[1])) || force) {
                this.store.dispatch(new UserListRequestActionCms())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new UserListSuccessActionCms({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }

    getCategoryList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getCategoryUserLoading);
        const loaded$ = this.store.select(getCategoryUserLoaded);
        const getUserData = this.store.select(getCategoryUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new UserListRequestActionCategory())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new UserListSuccessActionCategory({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
    getImpactStoryList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getImpactStoryUserLoading);
        const loaded$ = this.store.select(getImpactStoryUserLoaded);
        const getUserData = this.store.select(getImpactStoryUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new UserListRequestActionImpactStory())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new UserListSuccessActionImpactStory({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
    getCardList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getCardUserLoading);
        const loaded$ = this.store.select(getCardUserLoaded);
        const getUserData = this.store.select(getCardUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new UserListRequestActionCard())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new UserListSuccessActionCard({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
}