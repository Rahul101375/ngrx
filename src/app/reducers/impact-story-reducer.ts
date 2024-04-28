import { Action } from "../actions"
import { IMPACT_STORY_LIST_REQUEST, IMPACT_STORY_SUCCESS_REQUEST } from "../actions/impact-story"

export interface ImpactStoryReducerState {
    loading : boolean,
    loaded : boolean,
    impactStory : any
}

const impactStoryInitialState : ImpactStoryReducerState = {
    loading : false,
    loaded : false,
    impactStory : []
}

export function ImpactStoryReducer(state = impactStoryInitialState,action:Action) : ImpactStoryReducerState{
    switch(action.type){
        case IMPACT_STORY_LIST_REQUEST : {
            return {
                ...state,
                loading : true
            }
        }
        case IMPACT_STORY_SUCCESS_REQUEST : {
            const updateImpactStory = state.impactStory.concat(action.payload.data)
            return {
                ...state,
                loaded:true,
                loading:false,
                impactStory : updateImpactStory
            }
        }
        default : return { ...state}
    }
}

export const getImpactStoryForLoading = (state : ImpactStoryReducerState) => state.loading;
export const getImpactStoryForLoaded = (state : ImpactStoryReducerState) => state.loaded;
export const getImpactStoryForImpact = (state : ImpactStoryReducerState) => state.impactStory;