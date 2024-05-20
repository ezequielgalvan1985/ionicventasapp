import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListAPageRoutingModule } from './products-list-a-routing.module';

import { ProductsListAPage } from './products-list-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListAPageRoutingModule
  ],
  declarations: [ProductsListAPage]
})
export class ProductsListAPageModule {}
