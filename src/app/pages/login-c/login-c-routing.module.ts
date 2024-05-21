import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCPage } from './login-c.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCPageRoutingModule {}
