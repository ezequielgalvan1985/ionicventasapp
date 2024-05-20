import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardAPageRoutingModule } from './dashboard-a-routing.module';

import { DashboardAPage } from './dashboard-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardAPageRoutingModule
  ],
  declarations: [DashboardAPage]
})
export class DashboardAPageModule {}
