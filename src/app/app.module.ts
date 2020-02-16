import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ActionsModule} from './store/actions/actions.module';
import {SelectorsModule} from './store/selector/selectors.module';
import {NgReduxModule} from '@angular-redux/store';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ActionsModule,
    NgReduxModule,
    CoreModule,
    SelectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
