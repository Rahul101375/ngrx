
import { Action } from "../actions";
import { RESOURCE_GLOSSARY_FAILED_REQUEST, RESOURCE_GLOSSARY_LIST_REQUEST, RESOURCE_GLOSSARY_SUCCESS_REQUEST, RESOURCE_SUBCATEGORY_LIST_REQUEST, RESOURCE_SUBCATEGORY_SUCCESS_REQUEST } from "../actions/resource-action"

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

export interface ResourceSubCategoryState {
    loading:boolean;
    loaded:boolean;
    subCategory:any;
}

const resourceSubCategoryInitialState : ResourceSubCategoryState = {
    loaded:false,
    loading:false,
    subCategory:[]
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


export function ResourceSubCategoryReducer(state = resourceSubCategoryInitialState,action:Action):ResourceSubCategoryState{
    switch(action.type){
        case RESOURCE_GLOSSARY_FAILED_REQUEST : {
            return {
                ...state,
                loading : true
            }
        }
        case RESOURCE_SUBCATEGORY_LIST_REQUEST:{
            return {
                ...state,
                loading:true,
                loaded:false
            }
        }
        case RESOURCE_SUBCATEGORY_SUCCESS_REQUEST : {
            let updateSubCategory = state.subCategory.concat(action.payload.data)
            return {
                ...state,
                loaded:true,
                loading:false,
                subCategory : updateSubCategory
            }
        }
        default : {
            return state
        }
    }
}

export const getResourceSubCategoryLoaded = (state:ResourceSubCategoryState)=>state.loaded;
export const getResourceSubCategoryLoading = (state:ResourceSubCategoryState)=>state.loading;
export const getResourceSubCategoryData = (state:ResourceSubCategoryState)=>state.subCategory