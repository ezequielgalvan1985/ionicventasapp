import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercioGaleriaPage } from './comercio-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: ComercioGaleriaPage
  },
  {
    path: ':id',
    component: ComercioGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercioGaleriaPageRoutingModule {}
