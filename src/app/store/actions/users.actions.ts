import { Injectable } from '@angular/core';

@Injectable()
export class UsersActionService {

  static readonly GET_USER_LIST = 'GET_USER_LIST';
  static readonly GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
  static readonly GET_USER_LIST_REJECT = 'GET_USER_LIST_REJECT';

  getUserList() {
    return {
      type: UsersActionService.GET_USER_LIST,
    };
  }
  getUserListSuccess(userList) {
    return {
      type: UsersActionService.GET_USER_LIST_SUCCESS,
      payload: userList
    };
  }

  getUserListError(error) {
    return {
      type: UsersActionService.GET_USER_LIST_REJECT,
      payload: error
    };
  }
}
