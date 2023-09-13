import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicidadFormPageRoutingModule } from './publicidad-form-routing.module';

import { PublicidadFormPage } from './publicidad-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PublicidadFormPageRoutingModule
  ],
  declarations: [PublicidadFormPage]
})
export class PublicidadFormPageModule {}
