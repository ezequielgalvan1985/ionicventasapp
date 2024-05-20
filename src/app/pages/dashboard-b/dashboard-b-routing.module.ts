import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardBPage } from './dashboard-b.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardBPageRoutingModule {}
