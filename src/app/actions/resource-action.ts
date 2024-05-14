export const RESOURCE_GLOSSARY_LIST_REQUEST = " glossary list request "
export const RESOURCE_GLOSSARY_SUCCESS_REQUEST = "glossary success request"
export const RESOURCE_GLOSSARY_FAILED_REQUEST = "glossary failed request"
export const RESOURCE_SUBCATEGORY_LIST_REQUEST = "subcategory list request"
export const RESOURCE_SUBCATEGORY_SUCCESS_REQUEST = "subcategory success request"
export const RESOURCE_SUBCATEGORY_FAILED_REQUEST = "subcategory failed request"
export const RESOURCE_SUBCATEGORY_REPORT_LIST_REQUEST = "subcategory report list request"
export const RESOURCE_SUBCATEGORY_REPORT_SUCCESS_REQUEST = "subcategory report success request"
export const RESOURCE_SUBCATEGORY_REPORT_FAILED_REQUEST = "subcategory report failed request"
 
export class GlossaryListRequest {
    readonly type = RESOURCE_GLOSSARY_LIST_REQUEST
}
export class ResourceSubCategoryListRequest{
  readonly type = RESOURCE_SUBCATEGORY_LIST_REQUEST
}

export class ResourceSubCategoryReportListRequest{
  readonly type = RESOURCE_SUBCATEGORY_REPORT_LIST_REQUEST
}

export class GlossarySuccessRequest{
  readonly  type = RESOURCE_GLOSSARY_SUCCESS_REQUEST;
  constructor(public payload?: { data: any }) {
}
}

export class ResourceSubCategorySuccessRequest{
  readonly type = RESOURCE_SUBCATEGORY_SUCCESS_REQUEST;
  constructor(public payload ? : {data:any}){}
}

export class ResourceSubCategoryReportSuccessRequest {
  readonly type = RESOURCE_SUBCATEGORY_REPORT_SUCCESS_REQUEST;
  constructor(public payload ? : {data :any}){}
}