import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users.roating.module';
import {UsersListComponent} from './user-list/user-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule
  ],
  declarations: [UsersListComponent, UserProfileComponent]
})
export class UsersModule { }
