import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUser from './user-reducer';
import * as dashboard from './daashboard-reducer';
export interface RootReducerState {
  users : fromUser.UserReducerState;
  category : fromUser.CategoryReducerState;
  impactStory : fromUser.ImpactStoryReducerState,
  card : fromUser.CardReducerState,
  pie : dashboard.PieReducerState,
  groupBar : dashboard.GroupBarReducerState,
  ipsa : dashboard.IpsaReducerState,
  programViewCard : dashboard.CardReducerState,
  socialPie : dashboard.SocialPieReducerState,
  socialGroupBar : dashboard.SocialGroupBarReducerState,
  socialTimeLine : dashboard.SocialTimeLineReducerState,
  socialCard : dashboard.SocialCardReducerState,
  environmentalPie : dashboard.EnvironmentalPieReducerState,
  environmentalDDonut : dashboard.EnvironmentalDonutReducerState,
  environmentalTimeLine : dashboard.EnvironmentalTimeLineReducerState,
  environmentalGroupBar : dashboard.EnvironmentalGroupBarReducerState,
  country : dashboard.CountryReducerState
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
  users : fromUser.UserReducer,
  category : fromUser.CategoryReducer,
  impactStory : fromUser.ImpactStoryReducer,
  card : fromUser.CardReducer,
  pie : dashboard.PieReducer,
  groupBar : dashboard.GroupBarReducer,
  programViewCard : dashboard.CardReducer,
  ipsa : dashboard.IpsaReducer,
  socialPie : dashboard.SocialPieReducer,
  socialGroupBar : dashboard.SocialGroupBarReducer,
  socialTimeLine : dashboard.SocialTimeLineReducer,
  socialCard : dashboard.SocialCardReducer,
  environmentalPie : dashboard.EnvironmentalPieReducer,
  environmentalDDonut : dashboard.EnvironmentalDonutReducer,
  environmentalTimeLine : dashboard.EnvironmentalTimeLineReducer,
  environmentalGroupBar: dashboard.EnvironmentalGroupBarReducer,
  country : dashboard.CountryReducer
}

export const getUserState = (state : RootReducerState) => state.users;
export const getCategoryState = (state : RootReducerState) => state.category;
export const getImpactStoryState = (state : RootReducerState) => state.impactStory;
export const getCardState = (state : RootReducerState) => state.card;
export const getCountryState = (state : RootReducerState) => state.country;
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

export const getCountryLoading = createSelector(getCountryState , dashboard.getCountryDataForLoading);
export const getCountryLoaded = createSelector(getCountryState , dashboard.getCountryDataForLoaded);
export const getCountry = createSelector(getCountryState , dashboard.getCountryDataForCountry);

// dashboard start
export const getProgramViewImpactPieState = (state : RootReducerState) => state.pie;
export const getProgramViewImpactGroupBarState = (state : RootReducerState) => state.groupBar;
export const getProgramViewSocialSocialPieState = (state : RootReducerState) => state.socialPie;
export const getProgramViewSocialGroupSocialGroupBarState = (state : RootReducerState) => state.socialGroupBar;
export const getProgramViewSocialTimeLineState = (state : RootReducerState) => state.socialTimeLine;
export const getProgramViewSocialCardState = (state : RootReducerState) => state.socialCard;
export const getProgramViewEnvironmentalPieState = (state : RootReducerState) => state.environmentalPie;
export const getProgramViewEnvironmentalTimeLineState = (state : RootReducerState) => state.environmentalTimeLine;
export const getProgramViewEnvironmentalDonutState = (state : RootReducerState) => state.environmentalDDonut;
export const getProgramViewEnvironmentalGroupBarState = (state : RootReducerState) => state.environmentalGroupBar;
export const getProgramViewImpactCardState = (state : RootReducerState) => state.programViewCard;
export const getProgramViewImpactIpsaState = (state : RootReducerState) => state.ipsa;




export const getProgramViewImpactPieLoading = createSelector(getProgramViewImpactPieState,dashboard.getProgramViewImpactPieDataForLoading);
export const getProgramViewImpactPieLoaded= createSelector(getProgramViewImpactPieState,dashboard.getProgramViewImpactPieDataForLoaded)
export const getProgramViewImpactPie = createSelector(getProgramViewImpactPieState,dashboard.getProgramViewImpactPieDataForPie)

export const getProgramViewImpactGroupBarLoading = createSelector(getProgramViewImpactGroupBarState,dashboard.getProgramViewImpactGroupBarDataForLoading);
export const getProgramViewImpactGroupBarLoaded= createSelector(getProgramViewImpactGroupBarState,dashboard.getProgramViewImpactGroupBarDataForLoaded)
export const getProgramViewImpactGroupBar = createSelector(getProgramViewImpactGroupBarState,dashboard.getProgramViewImpactGroupBarDataForGroupBar)

export const getProgramViewSocialGroupBarSocialGroupBarLoading = createSelector(getProgramViewSocialGroupSocialGroupBarState,dashboard.getProgramViewSocialGroupBarDataForLoading);
export const getProgramViewSocialGroupBarSocialGroupBarLoaded= createSelector(getProgramViewSocialGroupSocialGroupBarState,dashboard.getProgramViewSocialGroupBarDataForLoaded)
export const getProgramViewSocialGroupBarSocialGroupBar = createSelector(getProgramViewSocialGroupSocialGroupBarState,dashboard.getProgramViewSocialGroupBarDataForGroupBar)

export const getProgramViewSocialGroupBarSocialPieLoading = createSelector(getProgramViewSocialSocialPieState,dashboard.getProgramViewSocialPieDataForLoading);
export const getProgramViewSocialGroupBarSocialPieLoaded= createSelector(getProgramViewSocialSocialPieState,dashboard.getProgramViewSocialPieDataForLoaded)
export const getProgramViewSocialGroupBarSocialPie = createSelector(getProgramViewSocialSocialPieState,dashboard.getProgramViewSocialPieDataForPie)

export const getProgramViewSocialTimeLineLoading = createSelector(getProgramViewSocialTimeLineState,dashboard.getProgramViewSocialTimeLineDataForLoading);
export const getProgramViewSocialTimeLineLoaded= createSelector(getProgramViewSocialTimeLineState,dashboard.getProgramViewSocialTimeLineDataForLoaded)
export const getProgramViewSocialTimeLine = createSelector(getProgramViewSocialTimeLineState,dashboard.getProgramViewSocialTimeLineDataForTimeLine)

export const getProgramViewSocialCardLoading = createSelector(getProgramViewSocialCardState,dashboard.getProgramViewSocialCardDataForLoading);
export const getProgramViewSocialCardLoaded= createSelector(getProgramViewSocialCardState,dashboard.getProgramViewSocialCardDataForLoaded)
export const getProgramViewSocialCard = createSelector(getProgramViewSocialCardState,dashboard.getProgramViewSocialCardDataForCard)

export const getProgramViewEnvironmentalTimeLineLoading = createSelector(getProgramViewEnvironmentalTimeLineState,dashboard.getProgramViewEnvironmentalTimeLineDataForLoading);
export const getProgramViewEnvironmentalTimeLineLoaded= createSelector(getProgramViewEnvironmentalTimeLineState,dashboard.getProgramViewEnvironmentalTimeLineDataForLoaded)
export const getProgramViewEnvironmentalTimeLine = createSelector(getProgramViewEnvironmentalTimeLineState,dashboard.getProgramViewEnvironmentalTimeLineDataForTimeLine)

export const getProgramViewEnvironmentalPieLoading = createSelector(getProgramViewEnvironmentalPieState,dashboard.getProgramViewEnvironmentalPieDataForLoading);
export const getProgramViewEnvironmentalPieLoaded= createSelector(getProgramViewEnvironmentalPieState,dashboard.getProgramViewEnvironmentalPieDataForLoaded)
export const getProgramViewEnvironmentalPie = createSelector(getProgramViewEnvironmentalPieState,dashboard.getProgramViewEnvironmentalPieDataForPie);

export const getProgramViewEnvironmentalDonutLoading = createSelector(getProgramViewEnvironmentalDonutState,dashboard.getProgramViewEnvironmentalDonutDataForLoading);
export const getProgramViewEnvironmentalDonutLoaded= createSelector(getProgramViewEnvironmentalDonutState,dashboard.getProgramViewEnvironmentalDonutDataForLoaded)
export const getProgramViewEnvironmentalDonut = createSelector(getProgramViewEnvironmentalDonutState,dashboard.getProgramViewEnvironmentalDonutDataForDonut);

export const getProgramViewEnvironmentalGroupBarLoading = createSelector(getProgramViewEnvironmentalGroupBarState,dashboard.getProgramViewEnvironmentalGroupBarDataForLoading);
export const getProgramViewEnvironmentalGroupBarLoaded= createSelector(getProgramViewEnvironmentalGroupBarState,dashboard.getProgramViewEnvironmentalGroupBarDataForLoaded)
export const getProgramViewEnvironmentalGroupBar = createSelector(getProgramViewEnvironmentalGroupBarState,dashboard.getProgramViewEnvironmentalGroupBarDataForGroupBar)

export const getProgramViewImpactCardLoading = createSelector(getProgramViewImpactCardState,dashboard.getProgramViewImpactCardDataForLoading);
export const getProgramViewImpactCardLoaded= createSelector(getProgramViewImpactCardState,dashboard.getProgramViewImpactCardDataForLoaded)
export const getProgramViewImpactCard = createSelector(getProgramViewImpactCardState,dashboard.getProgramViewImpactCardDataForCard)

export const getProgramViewImpactIpsaLoading = createSelector(getProgramViewImpactIpsaState,dashboard.getProgramViewImpactIpsaDataForLoading);
export const getProgramViewImpactIpsaLoaded= createSelector(getProgramViewImpactIpsaState,dashboard.getProgramViewImpactIpsaDataForLoaded)
export const getProgramViewImpactIpsa = createSelector(getProgramViewImpactIpsaState,dashboard.getProgramViewImpactIpsaDataForIpsa)