import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosEnviarPage } from './pedidos-enviar.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosEnviarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosEnviarPageRoutingModule {}
