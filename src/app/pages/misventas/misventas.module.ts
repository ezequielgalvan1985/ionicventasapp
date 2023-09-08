import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisventasPageRoutingModule } from './misventas-routing.module';

import { MisventasPage } from './misventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisventasPageRoutingModule
  ],
  declarations: [MisventasPage]
})
export class MisventasPageModule {}
