import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListBPage } from './products-list-b.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListBPageRoutingModule {}
