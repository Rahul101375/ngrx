// import {User} from '../models/user';
import {Action} from '../actions';
import { USER_LIST_REQUEST_CARD, USER_LIST_REQUEST_CATEGORY, USER_LIST_REQUEST_CMS, USER_LIST_REQUEST_IMPACT_STORY, USER_LIST_SUCCESS_CARD, USER_LIST_SUCCESS_CATEGORY, USER_LIST_SUCCESS_CMS, USER_LIST_SUCCESS_IMPACT_STORY } from '../actions/user-action';
// import {USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE} from '../actions/user-action';
// import {StoreUtility} from '../utils/store-utility';
// import {createSelector} from '@ngrx/store';

// export interface UserReducerState {
//   loading: boolean;
//   loaded: boolean;
//   error: boolean;
//   entities: { [id: number]: User };
//   ids: number[];
// }

// const initialState: UserReducerState = {
//   loaded: false,
//   loading: false,
//   error: false,
//   entities: {},
//   ids: []
// };

// export function UserReducer(state = initialState, action: Action): UserReducerState {
//   switch (action.type) {
//     case USER_LIST_REQUEST: {
//       return {...state, loading: true};
//     }
//     case USER_DELETE: {
//       const id = action.payload.id;
//       const newIds = state.ids.filter(elem => elem !== id);
//       const newEntities = StoreUtility.removeKey(state.entities, id);
//       return {...state, ...{entities: newEntities, ids: newIds}};
//     }
//     case USER_UPDATE: {
//       const user = action.payload.data;
//       const entity = {[user.id]: user};
//       const updatedEntities = {...state.entities, ...entity};
//       return {...state, ...{entities: updatedEntities}};
//     }
//     case USER_ADD: {
//       const user = action.payload.data;
//       const entity = {[user.id]: user};
//       const newEntities = {...state.entities, ...entity};
//       const newIds = StoreUtility.filterDuplicateIds([...state.ids, user.id]);
//       return {...state, ...{entities: newEntities, ids: newIds}};

//     }
//     case USER_LIST_ERROR: {
//       return {...state, error: true, loading: false};
//     }
//     case USER_LIST_SUCCESS: {
//       const users = action.payload.data;
//       const obj = StoreUtility.normalize(users);
//       const newEntities = {...state.entities, ...obj};
//       const ids = users.map((user:any) => user.id);
//       const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
//       return {
//         ...state, ...{
//           loaded: true,
//           loading: false, error: false,
//           entities: newEntities, ids: newIds
//         }
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }

// // selectors
// export const getLoading = (state: UserReducerState) => state.loading;
// export const getLoaded = (state: UserReducerState) => state.loaded;
// export const getEntities = (state: UserReducerState) => state.entities;
// export const getIds = (state: UserReducerState) => state.ids;
// export const getUsers = createSelector(getEntities,
//   (entities) => StoreUtility.unNormalized(entities));
// export const getError = (state: UserReducerState) => state.error;



export interface UserReducerState {
  loading : boolean;
  loaded : boolean;
  users : any
}

const initialState : UserReducerState = {
  loading : false,
  loaded : false,
  users : []
}

export interface CategoryReducerState {
  loading : boolean;
  loaded : boolean;
  category : any
}

const categoryInitialState : CategoryReducerState = {
  loading : false,
  loaded : false,
  category : []
}
export interface ImpactStoryReducerState {
  loading : boolean;
  loaded : boolean;
  impactStory : any
}

const impactStoryInitialState : ImpactStoryReducerState = {
  loading : false,
  loaded : false,
  impactStory : []
}
export interface CardReducerState {
  loading : boolean;
  loaded : boolean;
  card : any
}

const cardInitialState : CardReducerState = {
  loading : false,
  loaded : false,
  card : []
}
export function UserReducer(state = initialState, action:Action):UserReducerState{
  switch(action.type){
    case USER_LIST_REQUEST_CMS : {
      return {
        ...state,
        loading : true
      }
    }
    case USER_LIST_SUCCESS_CMS : {
      const cmsUpdate = state.users.concat(action.payload.data);
      return {
        ...state , loading:false , loaded:true,users : cmsUpdate
      }
    }
    default : {
      return state
    }
  }
}

export function CategoryReducer(state = categoryInitialState, action:Action):CategoryReducerState{
  switch(action.type){
    case USER_LIST_REQUEST_CATEGORY : {
      return {
        ...state,
        loading : true
      }
    }
    case USER_LIST_SUCCESS_CATEGORY : {
      const categoryUpdate = state.category.concat(action.payload.data)
      return {
        ...state , loading:false, loaded:true, category : categoryUpdate
      }
    }
    default : {
      return state
    }
  }
}

export function ImpactStoryReducer(state = impactStoryInitialState, action:Action):ImpactStoryReducerState{
  switch(action.type){
    case USER_LIST_REQUEST_IMPACT_STORY : {
      return {
        ...state,
        loading : true
      }
    }
    case USER_LIST_SUCCESS_IMPACT_STORY : {
      const impactStoryUpdate = state.impactStory.concat(action.payload.data)
      return {
        ...state , loading:false, loaded:true, impactStory : impactStoryUpdate
      }
    }
    default : {
      return state
    }
  }
}

export function CardReducer(state = cardInitialState, action:Action):CardReducerState{
  switch(action.type){
    case USER_LIST_REQUEST_CARD: {
      return {
        ...state,
        loading : true
      }
    }
    case USER_LIST_SUCCESS_CARD : {
      const cardUpdate = state.card.concat(action.payload.data)
      return {
        ...state , loading:false, loaded:true, card : cardUpdate
      }
    }
    default : {
      return state
    }
  }
}
// how to get value(loaded , loading, user) to use selector

export const getCmsLoading = (state : UserReducerState) => state.loading;
export const getCmsLoaded = (state : UserReducerState) => state.loaded;
export const getCmsUsers = (state : UserReducerState) => state.users;

export const getCategoryLoading = (state : CategoryReducerState) => state.loading;
export const getCategoryLoaded = (state : CategoryReducerState) => state.loaded;
export const getCategoryUsers = (state : CategoryReducerState) => state.category;

export const getImpactStoryLoading = (state : ImpactStoryReducerState) => state.loading;
export const getImpactStoryLoaded = (state : ImpactStoryReducerState) => state.loaded;
export const getImpactStoryUsers = (state : ImpactStoryReducerState) => state.impactStory;

export const getCardLoading = (state : CardReducerState) => state.loading;
export const getCardLoaded = (state : CardReducerState) => state.loaded;
export const getCardUsers = (state : CardReducerState) => state.card;
