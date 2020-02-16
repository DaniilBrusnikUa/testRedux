import {select, NgRedux} from '@angular-redux/store';
import {Subject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {isEqual} from 'lodash/fp';
import {IAppState} from '../app.store';

@Injectable()
export class UsersSelector {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  getUserList(): Observable<any> {
    return this.ngRedux.select((state: IAppState) => state.users.usersList)
      .pipe(
        distinctUntilChanged((prev, curr) => isEqual(prev, curr))
      );
  }
}
