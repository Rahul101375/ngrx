export const IMPACT_STORY_LIST_REQUEST = "impact request list"
export const IMPACT_STORY_SUCCESS_REQUEST = "impact request success"
export const IMPACT_STORY_FAILED_REQUEST = "impact request failed"

export class ImpactStoryActionRequestList {
   readonly type = IMPACT_STORY_LIST_REQUEST
}
export class ImpactStorySuccessRequest {
    readonly type = IMPACT_STORY_SUCCESS_REQUEST
    constructor(public payload ? : {data : any}){}
}