import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardBPageRoutingModule } from './dashboard-b-routing.module';

import { DashboardBPage } from './dashboard-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardBPageRoutingModule
  ],
  declarations: [DashboardBPage]
})
export class DashboardBPageModule {}
