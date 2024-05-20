import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDPage } from './dashboard-d.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardDPageRoutingModule {}
