
import { Action } from "../actions";
import { RESOURCE_GLOSSARY_LIST_REQUEST, RESOURCE_GLOSSARY_SUCCESS_REQUEST } from "../actions/resource-action"

export interface ResourceGlossaryState {
    loading:boolean;
    loaded:boolean;
    resourceGlossary:any;
}
const resourceGlossaryInitialState : ResourceGlossaryState = {
    loaded:false,
    loading:false,
    resourceGlossary : []
}

export function GlossaryReducer(state = resourceGlossaryInitialState ,action:Action):ResourceGlossaryState {
    switch(action.type){
        case RESOURCE_GLOSSARY_LIST_REQUEST : {
            return {
                ...state,
                loading:true
            }
        }
        case RESOURCE_GLOSSARY_SUCCESS_REQUEST : {
            const updateResourceGlossary = state.resourceGlossary.concat(action.payload.data);
            return {
                ...state,
                loading:false,
                loaded:true,
                resourceGlossary : updateResourceGlossary
            }
        }
        default : {
            return state
        }
    }
}

export const getResourceGlossaryLoading = (state : ResourceGlossaryState)=>state.loading;
export const getResourceGlossaryLoaded = (state : ResourceGlossaryState)=>state.loaded;
export const getResourceGlossaryData = (state : ResourceGlossaryState)=>state.resourceGlossary;
