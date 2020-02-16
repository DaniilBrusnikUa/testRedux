import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAppState} from '../../../store/app.store';
import {NgRedux} from '@angular-redux/store';
import {UsersActionService} from '../../../store/actions/users.actions';
import {UsersSelector} from '../../../store/selector/users.selector';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';


export interface UserList {
  name: string;
  email: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UsersListComponent implements OnInit, OnDestroy {
  constructor(  private ngRedux: NgRedux<IAppState>,
                private usersActionService: UsersActionService,
                private usersSelector: UsersSelector,
                private router: Router
  ) {
  }
  destr$: Subject<any> = new Subject();
  displayedColumns: string[] = ['name', 'email'];
  dataSource: any;

  ngOnInit() {
    this.ngRedux.dispatch(this.usersActionService.getUserList());
    this.usersSelector.getUserList().pipe(takeUntil(this.destr$))
     .subscribe(userList => this.dataSource = userList);
  }
  selectRow(user) {
    this.router.navigate(['/user-profile'], { queryParams: { id: user.id } });
  }

  ngOnDestroy(): void {
    this.destr$.next(true);
    this.destr$.complete();
  }
}
