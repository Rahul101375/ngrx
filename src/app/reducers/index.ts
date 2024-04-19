import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUser from './user-reducer';
export interface RootReducerState {
  users : fromUser.UserReducerState;
  category : fromUser.CategoryReducerState;
  impactStory : fromUser.ImpactStoryReducerState,
  card : fromUser.CardReducerState
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
  users : fromUser.UserReducer,
  category : fromUser.CategoryReducer,
  impactStory : fromUser.ImpactStoryReducer,
  card : fromUser.CardReducer
}

export const getUserState = (state : RootReducerState) => state.users;
export const getCategoryState = (state : RootReducerState) => state.category;
export const getImpactStoryState = (state : RootReducerState) => state.impactStory;
export const getCardState = (state : RootReducerState) => state.card;
// to make selector to get value to get one value from all values

export const getCmsUserLoading = createSelector(getUserState , fromUser.getCmsLoading);
export const getCmsUserLoaded = createSelector(getUserState , fromUser.getCmsLoaded);
export const getCmsUsers = createSelector(getUserState , fromUser.getCmsUsers);


export const getCategoryUserLoading = createSelector(getCategoryState , fromUser.getCategoryLoading);
export const getCategoryUserLoaded = createSelector(getCategoryState , fromUser.getCategoryLoaded);
export const getCategoryUsers = createSelector(getCategoryState , fromUser.getCategoryUsers);

export const getImpactStoryUserLoading = createSelector(getImpactStoryState , fromUser.getImpactStoryLoading);
export const getImpactStoryUserLoaded = createSelector(getImpactStoryState , fromUser.getImpactStoryLoaded);
export const getImpactStoryUsers = createSelector(getImpactStoryState , fromUser.getImpactStoryUsers);

export const getCardUserLoading = createSelector(getCardState , fromUser.getCardLoading);
export const getCardUserLoaded = createSelector(getCardState , fromUser.getCardLoaded);
export const getCardUsers = createSelector(getCardState , fromUser.getCardUsers);

// import * as fromUser from './user-reducer';
// import * as fromPost from './post-reducer';
// import {ActionReducerMap, createSelector} from '@ngrx/store';



// export interface RootReducerState {
//   users: fromUser.UserReducerState;
//   post: fromPost.PostReducerState;
// }

// export const rootReducer: ActionReducerMap<RootReducerState> = {
//   users: fromUser.UserReducer,
//   post: fromPost.PostReducer
// };

// export const getUserState = (state: RootReducerState) => state.users;

// export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
// export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
// export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
// export const getUsers = createSelector(getUserState, fromUser.getUsers);
// export const getUserError = createSelector(getUserState, fromUser.getError);

// export const getUserById = (state: RootReducerState, id: number) => {
//   const entities = getUserEntities(state);
//   return entities[id];
// };

// export const getPostState = (state: RootReducerState) => state.post;

// export const getPostLoaded = createSelector(getPostState, fromPost.getLoaded);
// export const getPostLoading = createSelector(getPostState, fromPost.getLoading);
// export const getPostEntities = createSelector(getPostState, fromPost.getEntities);
// export const getPosts = createSelector(getPostState, fromPost.getPosts);
// export const getPostError = createSelector(getPostState, fromPost.getError);

// export const getPostById = (state: RootReducerState, id: number) => {
//   const entities = getUserEntities(state);
//   return entities[id];
// };


