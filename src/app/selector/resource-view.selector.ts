// import { createSelector } from "@ngrx/store";
// import { RootReducerState } from "../reducers";
// import * as resourceView from '../reducers/resource-view-reducer'


// export const getResourceSubCategoryReportState = (state:RootReducerState)=>state.resourceSubCategoryReportEffect;
// export const getEffectData = createSelector(getResourceSubCategoryReportState,resourceView.getResourceSubCategoryData)


import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { ResourceSubCategoryReport } from "../reducers/resource-view-reducer";

export const resourceSubCategoryReportFeature = createFeatureSelector<ResourceSubCategoryReport>('rootReducer');

export const selectAllResourceSubcategoryReportData = createSelector(resourceSubCategoryReportFeature, 
    (state: ResourceSubCategoryReport) => {return state.subCategoryReport});
// export const selectResourceSubcategoryReportError = createSelector(resourceSubCategoryReportFeature, 
//     (state: ResourceSubCategoryReport) => state.subCategoryReportError);


// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { ResourceSubCategoryReport } from '../reducers/resource-view-reducer'; // assuming your reducer exports a State interface

// export const resourceSubCategoryReportFeature = createFeatureSelector<ResourceSubCategoryReport>('subCategoryReport');

// export const selectAllResourceSubcategoryReportData = createSelector(
//   resourceSubCategoryReportFeature,
//   (state: ResourceSubCategoryReport) => state.subCategoryReport
// );


// export const getResourceSubCategoryData = (state:ResourceSubCategoryReport) =>state.subCategoryReport
