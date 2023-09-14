import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicidadFormPage } from './publicidad-form.page';

const routes: Routes = [
  {
    path: '',
    component: PublicidadFormPage
  },
  {
    path: ':id',
    component: PublicidadFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicidadFormPageRoutingModule {}
