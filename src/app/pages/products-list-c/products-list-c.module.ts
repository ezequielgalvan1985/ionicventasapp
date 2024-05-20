import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListCPageRoutingModule } from './products-list-c-routing.module';

import { ProductsListCPage } from './products-list-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListCPageRoutingModule
  ],
  declarations: [ProductsListCPage]
})
export class ProductsListCPageModule {}
