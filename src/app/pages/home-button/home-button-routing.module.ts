import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeButtonPage } from './home-button.page';

const routes: Routes = [
  {
    path: '',
    component: HomeButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeButtonPageRoutingModule {}
