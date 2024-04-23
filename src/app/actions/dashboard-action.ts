export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE = "program view list request pie";
export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR = "program view list request group bar";



export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE = "program view success request pie";
export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR = "program success list request group bar";


export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_PIE = "program view failed request pie";
export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_GROUP_BAR = "program view failed request group bar";


export class ProgramViewImpactListRequestActionPie {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE;
  }
export class ProgramViewImpactListRequestActionGroupBar {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR;
  }

  export class ProgramViewImpactSuccessRequestActionPie{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewImpactSuccessRequestActionGroupBar{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR;
    constructor(public payload?: { data: any }) {
    }
  }