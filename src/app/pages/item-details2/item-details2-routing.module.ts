import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetails2Page } from './item-details2.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetails2PageRoutingModule {}
