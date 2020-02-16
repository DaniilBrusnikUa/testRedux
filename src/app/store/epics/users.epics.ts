import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import {UsersActionService} from '../actions/users.actions';
import {UsersService} from '../../services/async-srvices/users.service';


@Injectable()

export class UsersEffectService {
  constructor(
    private service: UsersService,
    private userActionService: UsersActionService,
  ) {
  }


  private getUserListE = (action$) => {
    return action$.pipe(ofType(UsersActionService.GET_USER_LIST),
      mergeMap((req: any) => {
        return this.service.getUserList().pipe(
          map((result: any) =>
            (this.userActionService.getUserListSuccess(result))),
          catchError(err => {
            return of(
              this.userActionService.getUserListError(err),
            );
          })
        );
      }),
    );
  }
  public getEpics() {
    return combineEpics(
      this.getUserListE,
    );
  }
}
