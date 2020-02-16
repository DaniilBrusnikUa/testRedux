import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersModule} from './pages/users/users.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'users',
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
