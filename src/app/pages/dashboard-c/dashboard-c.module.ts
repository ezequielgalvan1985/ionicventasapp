import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardCPageRoutingModule } from './dashboard-c-routing.module';

import { DashboardCPage } from './dashboard-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardCPageRoutingModule
  ],
  declarations: [DashboardCPage]
})
export class DashboardCPageModule {}
