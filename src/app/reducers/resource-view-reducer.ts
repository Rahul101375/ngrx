import { createReducer, on } from "@ngrx/store"
import * as ResourceViewAction from '../actions/resource-view-action'

export interface ResourceSubCategoryReport {
    subCategoryReport:any,
    subCategoryReportError:any
}

export const initialSubCategoryReportState : ResourceSubCategoryReport = {
    subCategoryReport : [],
    subCategoryReportError:null
}

export const resourceSubCategoryReport = createReducer(initialSubCategoryReportState,
    on(ResourceViewAction.resourceSubCategoryReportSuccess,
        (state,{subCategoryReport})=>({
        ...state,
        subCategoryReportError:null,
        subCategoryReport
    })),
    on(ResourceViewAction.resourceSubCategoryReportFailed,
        (state,{subCategoryReportError})=>({
        ...state,
       subCategoryReportError
    }))
)