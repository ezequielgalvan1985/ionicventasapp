import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComercioGaleriaPageRoutingModule } from './comercio-galeria-routing.module';

import { ComercioGaleriaPage } from './comercio-galeria.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComercioGaleriaPageRoutingModule
  ],
  declarations: [ComercioGaleriaPage]
})
export class ComercioGaleriaPageModule {}
