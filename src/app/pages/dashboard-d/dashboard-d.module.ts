import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardDPageRoutingModule } from './dashboard-d-routing.module';

import { DashboardDPage } from './dashboard-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardDPageRoutingModule
  ],
  declarations: [DashboardDPage]
})
export class DashboardDPageModule {}
