import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardAPage } from './dashboard-a.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAPageRoutingModule {}
