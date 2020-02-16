import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';

import { applyMiddleware, createStore } from 'redux';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../shared/data.service';
import { ConfigService } from '../shared/config.service';

import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import {UsersService} from '../services/async-srvices/users.service';
import {UsersEffectService} from '../store/epics/users.epics';
import {IAppState, INITIAL_STATE, rootReducer} from '../store/app.store';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgReduxModule,
    HttpClientModule,
    RouterModule.forChild([]),
    ReactiveFormsModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  providers: [
    DataService,
    ConfigService,
    UsersService,
    UsersEffectService
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension, usersEffectService: UsersEffectService,
  ) {

    const epicMiddleware = createEpicMiddleware();
    const rootEpic = combineEpics(
      usersEffectService.getEpics(),

    );
    const store = createStore(
      rootReducer,
      INITIAL_STATE,
      composeWithDevTools(applyMiddleware(epicMiddleware))
    );
    ngRedux.provideStore(store);
    epicMiddleware.run(rootEpic);
  }

}
