import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiService } from 'src/app/service/api.service';
import { User } from "../models/user";
import { Observable, Subscription, combineLatest } from 'rxjs';
import { RootReducerState, getResourceGlossaryDataForGlossaryData, getResourceGlossaryLoadedForGlossaryLoaded, getResourceGlossaryLoadingForGlossaryLoading, getResourceSubCategoryLoadingForData, getResourceSubCategoryLoadingForLoaded, getResourceSubCategoryLoadingForLoading } from "../reducers";
import { GlossaryListRequest, GlossarySuccessRequest, ResourceSubCategoryListRequest, ResourceSubCategorySuccessRequest } from "../actions/resource-action";



@Injectable({
    providedIn: 'root'
})

export class ResourceDataService {
    public subscriptions: Subscription[] = [];
    constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
    }
    getGlossaryList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getResourceGlossaryLoadingForGlossaryLoading);
        const loaded$ = this.store.select(getResourceGlossaryLoadedForGlossaryLoaded);
        const getUserData = this.store.select(getResourceGlossaryDataForGlossaryData);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new GlossaryListRequest())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new GlossarySuccessRequest({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
    getSubCategoryList(endPoint:string, force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getResourceSubCategoryLoadingForLoading);
        const loaded$ = this.store.select(getResourceSubCategoryLoadingForLoaded);
        const getUserData = this.store.select(getResourceSubCategoryLoadingForData);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ResourceSubCategoryListRequest())
                this.apiService.getAllUser(endPoint).subscribe(res => {
                    this.store.dispatch(new ResourceSubCategorySuccessRequest({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
}