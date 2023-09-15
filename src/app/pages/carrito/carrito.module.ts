import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoPageRoutingModule } from './carrito-routing.module';

import { CarritoPage } from './carrito.page';
import { PedidoItemListComponent } from 'src/app/componentes/pedido-item-list/pedido-item-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule
  ],
  declarations: [CarritoPage, PedidoItemListComponent],
  exports: [
    PedidoItemListComponent
]
})
export class CarritoPageModule {}
