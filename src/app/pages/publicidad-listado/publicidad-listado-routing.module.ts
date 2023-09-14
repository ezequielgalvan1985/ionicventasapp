import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicidadListadoPage } from './publicidad-listado.page';

const routes: Routes = [
  {
    path: '',
    component: PublicidadListadoPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicidadListadoPageRoutingModule {}
