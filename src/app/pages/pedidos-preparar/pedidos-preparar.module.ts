import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPrepararPageRoutingModule } from './pedidos-preparar-routing.module';

import { PedidosPrepararPage } from './pedidos-preparar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPrepararPageRoutingModule
  ],
  declarations: [PedidosPrepararPage]
})
export class PedidosPrepararPageModule {}
