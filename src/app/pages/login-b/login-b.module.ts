import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBPageRoutingModule } from './login-b-routing.module';

import { LoginBPage } from './login-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBPageRoutingModule
  ],
  declarations: [LoginBPage]
})
export class LoginBPageModule {}
