import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicidadListadoPageRoutingModule } from './publicidad-listado-routing.module';

import { PublicidadListadoPage } from './publicidad-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicidadListadoPageRoutingModule
  ],
  declarations: [PublicidadListadoPage]
})
export class PublicidadListadoPageModule {}
