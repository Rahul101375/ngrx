import { createAction, props } from "@ngrx/store";

export const resourceSubCategoryReportLoad = createAction('[Sub Category Report] load');
export const resourceSubCategoryReportSuccess = createAction('[Sub Category Report] success',props<{subCategoryReport:ReadonlyArray<any>}>());
export const resourceSubCategoryReportFailed = createAction('[Sub Category Report] failed',props<any>());