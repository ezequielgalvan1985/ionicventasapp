import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPedidoPageRoutingModule } from './check-pedido-routing.module';

import { CheckPedidoPage } from './check-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPedidoPageRoutingModule
  ],
  declarations: [CheckPedidoPage]
})
export class CheckPedidoPageModule {}
