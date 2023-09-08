import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosPrepararPage } from './pedidos-preparar.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosPrepararPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosPrepararPageRoutingModule {}
