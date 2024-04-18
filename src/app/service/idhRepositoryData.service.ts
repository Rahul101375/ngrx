import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootReducerState, getUserLoaded, getUserLoading, getUsers } from "../reducers";
import { Observable, combineLatest } from "rxjs";
import { UserListRequestAction, UserListSuccessAction } from "../actions/user-action";
import { ApiService } from 'src/app/service/api.service';
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class IdhRepositoryDataService {
    constructor(private store: Store<RootReducerState>, private apiService: ApiService) {
    }
    getList(force: boolean = false): [Observable<boolean>, Observable<User[]>] {
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);
        const getUserData = this.store.select(getUsers);
        combineLatest([loaded$, loading$]).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new UserListRequestAction())
                this.apiService.getAllUser().subscribe(res => {
                    this.store.dispatch(new UserListSuccessAction({ data: res }))
                })
            }
        })
        return [loaded$, getUserData]
    }
}