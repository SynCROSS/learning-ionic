import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmenuPageRoutingModule } from './addmenu-routing.module';

import { AddmenuPage } from './addmenu.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddmenuPageRoutingModule,
    RouterModule.forChild([
      {
        path: '/add',
        component: AddmenuPage,
      },
    ]),
  ],
  declarations: [AddmenuPage],
})
export class AddmenuPageModule {}
