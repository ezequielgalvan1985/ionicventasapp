import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeButtonPageRoutingModule } from './home-button-routing.module';

import { HomeButtonPage } from './home-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeButtonPageRoutingModule
  ],
  declarations: [HomeButtonPage]
})
export class HomeButtonPageModule {}
