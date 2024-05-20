import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetails2PageRoutingModule } from './item-details2-routing.module';

import { ItemDetails2Page } from './item-details2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetails2PageRoutingModule
  ],
  declarations: [ItemDetails2Page]
})
export class ItemDetails2PageModule {}
