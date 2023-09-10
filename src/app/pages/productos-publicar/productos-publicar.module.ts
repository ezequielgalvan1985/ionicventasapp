import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPublicarPageRoutingModule } from './productos-publicar-routing.module';

import { ProductosPublicarPage } from './productos-publicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductosPublicarPageRoutingModule
  ],
  declarations: [ProductosPublicarPage]
})
export class ProductosPublicarPageModule {}
