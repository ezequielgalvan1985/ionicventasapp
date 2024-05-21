import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCPageRoutingModule } from './login-c-routing.module';

import { LoginCPage } from './login-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCPageRoutingModule
  ],
  declarations: [LoginCPage]
})
export class LoginCPageModule {}
