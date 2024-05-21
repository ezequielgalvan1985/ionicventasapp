import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carrito4PageRoutingModule } from './carrito4-routing.module';

import { Carrito4Page } from './carrito4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carrito4PageRoutingModule
  ],
  declarations: [Carrito4Page]
})
export class Carrito4PageModule {}
