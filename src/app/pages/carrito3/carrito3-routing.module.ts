import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carrito3Page } from './carrito3.page';

const routes: Routes = [
  {
    path: '',
    component: Carrito3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carrito3PageRoutingModule {}
