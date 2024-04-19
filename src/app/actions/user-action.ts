// import {User} from '../models/user';

export const USER_LIST_REQUEST_CMS = 'user list request cms';
export const USER_LIST_SUCCESS_CMS = 'user list success cms';
export const USER_LIST_FAILED_CMS  = 'user list failed cms';

export const USER_LIST_REQUEST_CATEGORY = 'user list request category';
export const USER_LIST_SUCCESS_CATEGORY = 'user list success category';
export const USER_LIST_FAILED_CATEGORY  = 'user list failed category'; 

export const USER_LIST_REQUEST_IMPACT_STORY = 'user list request impact story';
export const USER_LIST_SUCCESS_IMPACT_STORY = 'user list success impact story';
export const USER_LIST_FAILED_IMPACT_STORY  = 'user list failed impact story'; 

export const USER_LIST_REQUEST_CARD = 'user list request card';
export const USER_LIST_SUCCESS_CARD = 'user list success card';
export const USER_LIST_FAILED_CARD  = 'user list failed card'; 
// export const USER_DELETE = 'user delete';
// export const USER_UPDATE = 'user update';
// export const USER_ADD = 'user add';
// export const USER_LIST_ERROR = 'user list error';

export class UserListRequestActionCms {
  readonly type = USER_LIST_REQUEST_CMS;
}
export class UserListRequestActionCategory {
  readonly type = USER_LIST_REQUEST_CATEGORY;
}

export class UserListRequestActionImpactStory {
  readonly type = USER_LIST_REQUEST_IMPACT_STORY;
}
export class UserListRequestActionCard {
  readonly type = USER_LIST_REQUEST_CARD;
}

// export class UserDeleteAction {
//   readonly type = USER_DELETE;

//   constructor(public payload?: { id: number }) {
//   }
// }

// export class UserUpdateAction {
//   readonly type = USER_UPDATE;

//   constructor(public payload?: { data: User }) {
//   }
// }

// export class UserAddAction {
//   readonly type = USER_ADD;

//   constructor(public payload?: { data: User }) {
//   }
// }

// export class UserListErrorAction {
//   readonly type = USER_LIST_ERROR;
// }

export class UserListSuccessActionCms {
  readonly type = USER_LIST_SUCCESS_CMS;
  constructor(public payload?: { data: any }) {
  }
}

export class UserListSuccessActionCategory {
  readonly type = USER_LIST_SUCCESS_CATEGORY;
  constructor(public payload?: { data: any }) {
  }
}

export class UserListSuccessActionImpactStory {
  readonly type = USER_LIST_SUCCESS_IMPACT_STORY;
  constructor(public payload?: { data: any }) {
  }
}

export class UserListSuccessActionCard {
  readonly type = USER_LIST_SUCCESS_CARD;
  constructor(public payload?: { data: any }) {
  }
}