import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckPedidoPage } from './check-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CheckPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckPedidoPageRoutingModule {}
