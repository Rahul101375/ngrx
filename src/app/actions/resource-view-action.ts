import { createAction, props } from "@ngrx/store";
import * as project from '../models/product'

export const resourceSubCategoryReportLoad = createAction('[Sub Category Report Component] load');
export const resourceSubCategoryReportSuccess = createAction('[Sub Category Report Component] success',props<{subCategoryReport:any}>());
export const resourceSubCategoryReportFailed = createAction('[Sub Category Report Component] failed',props<{subCategoryReportError:string}>());
