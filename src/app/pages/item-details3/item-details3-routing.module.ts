import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetails3Page } from './item-details3.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDetails3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetails3PageRoutingModule {}
