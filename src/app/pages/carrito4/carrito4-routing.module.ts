import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carrito4Page } from './carrito4.page';

const routes: Routes = [
  {
    path: '',
    component: Carrito4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carrito4PageRoutingModule {}
