import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardCPage } from './dashboard-c.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCPageRoutingModule {}
