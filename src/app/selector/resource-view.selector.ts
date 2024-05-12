import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { ResourceSubCategoryReport } from "../reducers/resource-view-reducer";

export const resourceSubCategoryReportFeature = createFeatureSelector<ResourceSubCategoryReport>('product');

export const selectAllResourceSubcategoryReportData = createSelector(resourceSubCategoryReportFeature, 
    (state: ResourceSubCategoryReport) => state.subCategoryReport);
export const selectResourceSubcategoryReportError = createSelector(resourceSubCategoryReportFeature, 
    (state: ResourceSubCategoryReport) => state.subCategoryReportError);