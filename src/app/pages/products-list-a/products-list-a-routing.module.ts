import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListAPage } from './products-list-a.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListAPageRoutingModule {}
