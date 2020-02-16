import {UsersActionService} from '../actions/users.actions';

/*export interface IUsersState {
  executionBudgetId: number;
  year: number;
  orgUnitId: number;
  budgetGroupId: number;
  started: string;
  completed: any;
  allocations: {
    [key: string]: number;
  };
}*/

export interface IUsers {
  usersList: any;
}
export const USERS_STATE: IUsers = {
  usersList: null
};

function getUserList(state, action) {
  return {
    ...state,
    usersList: action.type === UsersActionService.GET_USER_LIST_SUCCESS ? action.payload.data : state.usersList,
  };
}


export function usersReducer(state: IUsers = USERS_STATE, action): IUsers {
  switch (action.type) {
    case UsersActionService.GET_USER_LIST_SUCCESS:
    return getUserList(state, action);
  }
  return state;
}
