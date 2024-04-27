export const RESOURCE_GLOSSARY_LIST_REQUEST = " glossary list request "
export const RESOURCE_GLOSSARY_SUCCESS_REQUEST = "glossary success request"
export const RESOURCE_GLOSSARY_FAILED_REQUEST = "glossary failed request"

export class GlossaryListRequest {
    readonly type = RESOURCE_GLOSSARY_LIST_REQUEST
}

export class GlossarySuccessRequest{
  readonly  type = RESOURCE_GLOSSARY_SUCCESS_REQUEST;
  constructor(public payload?: { data: any }) {
}
}