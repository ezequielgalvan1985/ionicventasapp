import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListBPageRoutingModule } from './products-list-b-routing.module';

import { ProductsListBPage } from './products-list-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListBPageRoutingModule
  ],
  declarations: [ProductsListBPage]
})
export class ProductsListBPageModule {}
