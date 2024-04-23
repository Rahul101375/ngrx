import { Action } from "../actions"
import { PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR, PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE, ProgramViewImpactListRequestActionPie } from "../actions/dashboard-action"

export interface PieReducerState {
    loading:boolean,
    loaded : boolean,
    pie : any
}

const initialStatePie : PieReducerState = {
    loading : false,
    loaded : false,
    pie : []
}

export interface GroupBarReducerState {
    loading:boolean,
    loaded : boolean,
    groupBar : any
}

const initialStateGroupBar : GroupBarReducerState = {
    loading : false,
    loaded : false,
    groupBar : []
}
export function PieReducer(state = initialStatePie,action:Action):PieReducerState{
    switch(action.type){
        case PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE : {
            const pieDataUpdate = state.pie.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                pie :pieDataUpdate
            }
        }
        default : {return state;}
    }
}

export function GroupBarReducer(state = initialStateGroupBar , action:Action) : GroupBarReducerState{
    switch(action.type){
        case PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR :{
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR : {
            const groupBarUpdateData = state.groupBar.concat(action.payload.data)
            return {
                ...state,
                loaded:true,
                loading : false,
                groupBar : groupBarUpdateData
            }
        }
        default : return {...state}
    }
}

export const getProgramViewImpactPieDataForLoading = (state:PieReducerState) => state.loading;
export const getProgramViewImpactPieDataForLoaded = (state:PieReducerState) => state.loaded;
export const getProgramViewImpactPieDataForPie = (state:PieReducerState) => state.pie;

export const getProgramViewImpactGroupBarDataForLoading = (state:GroupBarReducerState) => state.loading;
export const getProgramViewImpactGroupBarDataForLoaded = (state:GroupBarReducerState) => state.loaded;
export const getProgramViewImpactGroupBarDataForGroupBar = (state:GroupBarReducerState) => state.groupBar;