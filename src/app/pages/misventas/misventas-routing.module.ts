import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisventasPage } from './misventas.page';

const routes: Routes = [
  {
    path: '',
    component: MisventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisventasPageRoutingModule {}
