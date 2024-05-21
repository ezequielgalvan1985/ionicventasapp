import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carrito3PageRoutingModule } from './carrito3-routing.module';

import { Carrito3Page } from './carrito3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carrito3PageRoutingModule
  ],
  declarations: [Carrito3Page]
})
export class Carrito3PageModule {}
