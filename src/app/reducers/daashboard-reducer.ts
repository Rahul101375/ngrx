import { Action } from "../actions"
import { COUNTRY_LIST_REQUEST, COUNTRY_SUCCESS_REQUEST, PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT, PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_GROUP_BAR, PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE, PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE, PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT, PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_GROUP_BAR, PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE, PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE, PROGRAM_VIEW_IMPACT_LIST_REQUEST_CARD, PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR, PROGRAM_VIEW_IMPACT_LIST_REQUEST_IPSA, PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_CARD, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_IPSA, PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE, PROGRAM_VIEW_SOCIAL_LIST_REQUEST_CARD, PROGRAM_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR, PROGRAM_VIEW_SOCIAL_LIST_REQUEST_PIE, PROGRAM_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE, PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_CARD, PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR, PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_PIE, PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE, ProgramViewImpactListRequestActionPie } from "../actions/dashboard-action"

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

export interface IpsaReducerState {
    loading:boolean,
    loaded : boolean,
    ipsa : any
}

const initialStateIpsa : IpsaReducerState = {
    loading : false,
    loaded : false,
    ipsa : []
}

export interface CardReducerState {
    loading:boolean,
    loaded : boolean,
    card : any
}

const initialStateCard : CardReducerState = {
    loading : false,
    loaded : false,
    card : []
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
export interface SocialPieReducerState {
    loading:boolean,
    loaded : boolean,
    socialPie : any
}

const initialStateSocialPie : SocialPieReducerState = {
    loading : false,
    loaded : false,
    socialPie : []
}

export interface SocialGroupBarReducerState {
    loading:boolean,
    loaded : boolean,
    socialGroupBar : any
}

const initialStateSocialGroupBar : SocialGroupBarReducerState = {
    loading : false,
    loaded : false,
    socialGroupBar : []
}

export interface SocialTimeLineReducerState {
    loading:boolean,
    loaded : boolean,
    socialTimeLine : any
}

const initialStateSocialTimeLine : SocialTimeLineReducerState = {
    loading : false,
    loaded : false,
    socialTimeLine : []
}

export interface SocialCardReducerState {
    loading:boolean,
    loaded : boolean,
    socialCard : any
}

const initialStateSocialCard : SocialCardReducerState = {
    loading : false,
    loaded : false,
    socialCard : []
}

export interface EnvironmentalTimeLineReducerState {
    loading:boolean,
    loaded : boolean,
    environmentalTimeLine : any
}

const initialStateEnvironmentalTimeLine : EnvironmentalTimeLineReducerState = {
    loading : false,
    loaded : false,
    environmentalTimeLine : []
}

export interface EnvironmentalPieReducerState {
    loading:boolean,
    loaded : boolean,
    environmentalPie : any
}

const initialStateEnvironmentalPie : EnvironmentalPieReducerState = {
    loading : false,
    loaded : false,
    environmentalPie : []
}

export interface EnvironmentalDonutReducerState {
    loading:boolean,
    loaded : boolean,
    environmentalDonut : any
}

const initialStateEnvironmentalDonut : EnvironmentalDonutReducerState = {
    loading : false,
    loaded : false,
    environmentalDonut : []
}
export interface EnvironmentalGroupBarReducerState {
    loading:boolean,
    loaded : boolean,
    environmentalGroupBar : any
}

const initialStateEnvironmentalGroupBar : EnvironmentalGroupBarReducerState = {
    loading : false,
    loaded : false,
    environmentalGroupBar : []
}

export interface CountryReducerState {
    loading:boolean,
    loaded : boolean,
    country : any
}

const initialStateCountryReducerState : CountryReducerState = {
    loading : false,
    loaded : false,
    country : []
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

export function CountryReducer(state = initialStateCountryReducerState,action:Action):CountryReducerState{
    switch(action.type){
        case COUNTRY_LIST_REQUEST : {
            return {
                ...state,
                loading : true
            }
        }
        case COUNTRY_SUCCESS_REQUEST: {
            const countryDataUpdate = state.country.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                country :countryDataUpdate
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

export function CardReducer(state = initialStateCard,action:Action):CardReducerState{
    switch(action.type){
        case PROGRAM_VIEW_IMPACT_LIST_REQUEST_CARD : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_CARD : {
            const cardDataUpdate = state.card.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                card :cardDataUpdate
            }
        }
        default : {return state;}
    }
}

export function IpsaReducer(state = initialStateIpsa,action:Action):IpsaReducerState{
    switch(action.type){
        case PROGRAM_VIEW_IMPACT_LIST_REQUEST_IPSA : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_IPSA : {
            const ipsaDataUpdate = state.ipsa.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                ipsa :ipsaDataUpdate
            }
        }
        default : {return state;}
    }
}

export function SocialPieReducer(state = initialStateSocialPie,action:Action):SocialPieReducerState{
    switch(action.type){
        case PROGRAM_VIEW_SOCIAL_LIST_REQUEST_PIE : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_PIE : {
            const socialPieDataUpdate = state.socialPie.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                socialPie :socialPieDataUpdate
            }
        }
        default : {return state;}
    }
}

export function SocialGroupBarReducer(state = initialStateSocialGroupBar,action:Action):SocialGroupBarReducerState{
    switch(action.type){
        case PROGRAM_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR: {
            const socialGroupBarDataUpdate = state.socialGroupBar.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                socialGroupBar :socialGroupBarDataUpdate
            }
        }
        default : {return state;}
    }
}

export function SocialTimeLineReducer(state = initialStateSocialTimeLine,action:Action):SocialTimeLineReducerState{
    switch(action.type){
        case PROGRAM_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE: {
            const socialTimeLineDataUpdate = state.socialTimeLine.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                socialTimeLine :socialTimeLineDataUpdate
            }
        }
        default : {return state;}
    }
}

export function SocialCardReducer(state = initialStateSocialCard,action:Action):SocialCardReducerState{
    switch(action.type){
        case PROGRAM_VIEW_SOCIAL_LIST_REQUEST_CARD : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_CARD: {
            const socialCardDataUpdate = state.socialCard.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                socialCard :socialCardDataUpdate
            }
        }
        default : {return state;}
    }
}

export function EnvironmentalTimeLineReducer(state = initialStateEnvironmentalTimeLine,action:Action):EnvironmentalTimeLineReducerState{
    switch(action.type){
        case PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE: {
            const environmentalTimeLineDataUpdate = state.environmentalTimeLine.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                environmentalTimeLine :environmentalTimeLineDataUpdate
            }
        }
        default : {return state;}
    }
}

export function EnvironmentalPieReducer(state = initialStateEnvironmentalPie,action:Action):EnvironmentalPieReducerState{
    switch(action.type){
        case PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE : {
            const environmentalPieDataUpdate = state.environmentalPie.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                environmentalPie :environmentalPieDataUpdate
            }
        }
        default : {return state;}
    }
}

export function EnvironmentalDonutReducer(state = initialStateEnvironmentalDonut,action:Action):EnvironmentalDonutReducerState{
    switch(action.type){
        case PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT : {
            const environmentalDonutDataUpdate = state.environmentalDonut.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                environmentalDonut :environmentalDonutDataUpdate
            }
        }
        default : {return state;}
    }
}

export function EnvironmentalGroupBarReducer(state = initialStateEnvironmentalGroupBar,action:Action):EnvironmentalGroupBarReducerState{
    switch(action.type){
        case PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_GROUP_BAR : {
            return {
                ...state,
                loading : true
            }
        }
        case PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_GROUP_BAR : {
            const environmentalGroupBarDataUpdate = state.environmentalGroupBar.concat(action.payload.data);
            return {
                ...state,
                loaded : true,
                loading : false,
                environmentalGroupBar :environmentalGroupBarDataUpdate
            }
        }
        default : {return state;}
    }
}



export const getCountryDataForLoading = (state:CountryReducerState) => state.loading;
export const getCountryDataForLoaded = (state:CountryReducerState) => state.loaded;
export const getCountryDataForCountry = (state:CountryReducerState) => state.country;

export const getProgramViewImpactPieDataForLoading = (state:PieReducerState) => state.loading;
export const getProgramViewImpactPieDataForLoaded = (state:PieReducerState) => state.loaded;
export const getProgramViewImpactPieDataForPie = (state:PieReducerState) => state.pie;

export const getProgramViewImpactGroupBarDataForLoading = (state:GroupBarReducerState) => state.loading;
export const getProgramViewImpactGroupBarDataForLoaded = (state:GroupBarReducerState) => state.loaded;
export const getProgramViewImpactGroupBarDataForGroupBar = (state:GroupBarReducerState) => state.groupBar;

export const getProgramViewSocialPieDataForLoading = (state:SocialPieReducerState) => state.loading;
export const getProgramViewSocialPieDataForLoaded = (state:SocialPieReducerState) => state.loaded;
export const getProgramViewSocialPieDataForPie = (state:SocialPieReducerState) => state.socialPie;

export const getProgramViewSocialGroupBarDataForLoading = (state:SocialGroupBarReducerState) => state.loading;
export const getProgramViewSocialGroupBarDataForLoaded = (state:SocialGroupBarReducerState) => state.loaded;
export const getProgramViewSocialGroupBarDataForGroupBar = (state:SocialGroupBarReducerState) => state.socialGroupBar;

export const getProgramViewSocialTimeLineDataForLoading = (state:SocialTimeLineReducerState) => state.loading;
export const getProgramViewSocialTimeLineDataForLoaded = (state:SocialTimeLineReducerState) => state.loaded;
export const getProgramViewSocialTimeLineDataForTimeLine = (state:SocialTimeLineReducerState) => state.socialTimeLine;

export const getProgramViewSocialCardDataForLoading = (state:SocialCardReducerState) => state.loading;
export const getProgramViewSocialCardDataForLoaded = (state:SocialCardReducerState) => state.loaded;
export const getProgramViewSocialCardDataForCard = (state:SocialCardReducerState) => state.socialCard;

export const getProgramViewEnvironmentalTimeLineDataForLoading = (state:EnvironmentalTimeLineReducerState) => state.loading;
export const getProgramViewEnvironmentalTimeLineDataForLoaded = (state:EnvironmentalTimeLineReducerState) => state.loaded;
export const getProgramViewEnvironmentalTimeLineDataForTimeLine = (state:EnvironmentalTimeLineReducerState) => state.environmentalTimeLine;

export const getProgramViewEnvironmentalPieDataForLoading = (state:EnvironmentalPieReducerState) => state.loading;
export const getProgramViewEnvironmentalPieDataForLoaded = (state:EnvironmentalPieReducerState) => state.loaded;
export const getProgramViewEnvironmentalPieDataForPie = (state:EnvironmentalPieReducerState) => state.environmentalPie;

export const getProgramViewEnvironmentalDonutDataForLoading = (state:EnvironmentalDonutReducerState) => state.loading;
export const getProgramViewEnvironmentalDonutDataForLoaded = (state:EnvironmentalDonutReducerState) => state.loaded;
export const getProgramViewEnvironmentalDonutDataForDonut = (state:EnvironmentalDonutReducerState) => state.environmentalDonut;

export const getProgramViewEnvironmentalGroupBarDataForLoading = (state:EnvironmentalGroupBarReducerState) => state.loading;
export const getProgramViewEnvironmentalGroupBarDataForLoaded = (state:EnvironmentalGroupBarReducerState) => state.loaded;
export const getProgramViewEnvironmentalGroupBarDataForGroupBar = (state:EnvironmentalGroupBarReducerState) => state.environmentalGroupBar;

export const getProgramViewImpactIpsaDataForLoading = (state:IpsaReducerState) => state.loading;
export const getProgramViewImpactIpsaDataForLoaded = (state:IpsaReducerState) => state.loaded;
export const getProgramViewImpactIpsaDataForIpsa = (state:IpsaReducerState) => state.ipsa;

export const getProgramViewImpactCardDataForLoading = (state:CardReducerState) => state.loading;
export const getProgramViewImpactCardDataForLoaded = (state:CardReducerState) => state.loaded;
export const getProgramViewImpactCardDataForCard = (state:CardReducerState) => state.card;