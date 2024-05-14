import { createReducer, on } from "@ngrx/store"
import * as ResourceViewAction from '../actions/resource-view-action'
import * as product from "../models/product"
import { Action } from "../actions"

// import { Action } from "../actions";
export interface ResourceSubCategoryReport {
    subCategoryReport: any,
    // subCategoryReportError:string | null
}

export const initialSubCategoryReportState : ResourceSubCategoryReport = {
    subCategoryReport : [],
    // subCategoryReportError:null
}

export const resourceSubCategoryReport = createReducer(initialSubCategoryReportState,
  on(ResourceViewAction.resourceSubCategoryReportSuccess,
        (state,action)=>{
          debugger
          const update = state.subCategoryReport.concat(action.subCategoryReport.data)
          console.log("update",update)
      return {
        ...state,
        subCategoryReport : update ,
      }
    }),
    // on(ResourceViewAction.resourceSubCategoryReportFailed,
    //     (state,{subCategoryReportError})=>({
    //     ...state,
    //    subCategoryReportError,
    //    subCategoryReport :null
    // }))
)
export const getResourceSubCategoryData = (state:ResourceSubCategoryReport)=>state.subCategoryReport
// export const resourceSubCategoryReport = (state = initialSubCategoryReportState,action : Action) : ResourceSubCategoryReport=>{
//   switch(action.type){
//     case ResourceViewAction.RESOURCE_SUBCATEGORY_REPORT_FAILED_REQUEST : {
//       return {
//         ...state,
//       }
//     }
//     case ResourceViewAction.RESOURCE_SUBCATEGORY_REPORT_SUCCESS_REQUEST : {
//       const update = state.subCategoryReport.concat(action.payload.data)
//       return {
//         ...state,
//         subCategoryReport : update
//       }
//     }
//     default : {
//       return state
//     }
//   }
// }
// export const getResourceSubCategoryReportData = (state:ResourceSubCategoryReport) =>state.subCategoryReport