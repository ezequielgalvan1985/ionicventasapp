import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetails3PageRoutingModule } from './item-details3-routing.module';

import { ItemDetails3Page } from './item-details3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetails3PageRoutingModule
  ],
  declarations: [ItemDetails3Page]
})
export class ItemDetails3PageModule {}
