import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPublicarPage } from './productos-publicar.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPublicarPage
  },
  {
    path: ':id',
    component: ProductosPublicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPublicarPageRoutingModule {}
