import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosEnviarPageRoutingModule } from './pedidos-enviar-routing.module';

import { PedidosEnviarPage } from './pedidos-enviar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosEnviarPageRoutingModule
  ],
  declarations: [PedidosEnviarPage]
})
export class PedidosEnviarPageModule {}
