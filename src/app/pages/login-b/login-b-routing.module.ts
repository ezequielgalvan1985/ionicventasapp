import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBPage } from './login-b.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginBPageRoutingModule {}
