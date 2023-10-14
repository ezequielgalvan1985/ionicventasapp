import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelControlPageRoutingModule } from './panel-control-routing.module';

import { PanelControlPage } from './panel-control.page';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelControlPageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  declarations: [PanelControlPage]
})
export class PanelControlPageModule {}
