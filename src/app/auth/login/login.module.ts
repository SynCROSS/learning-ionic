import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';

import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RouterModule.forChild([
      {
        path: '/login',
        component: LoginPage,
      },
    ]),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
