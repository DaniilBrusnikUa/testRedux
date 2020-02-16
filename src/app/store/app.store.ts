import {IUsers, USERS_STATE, usersReducer} from './reducers/users.reducer';
import {combineReducers} from 'redux';

export interface IAppState {
  users: IUsers;
}
export const INITIAL_STATE: IAppState = {
  users: USERS_STATE
};
export const rootReducer = combineReducers<IAppState>({
  users: usersReducer
});
