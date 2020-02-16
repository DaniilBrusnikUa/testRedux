import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './user-list/user-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: ':id',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
