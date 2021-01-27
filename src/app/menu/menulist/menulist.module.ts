import { AddmenuPageModule } from './../addmenu/addmenu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulistPageRoutingModule } from './menulist-routing.module';

import { MenulistPage } from './menulist.page';
import { AddmenuPage } from '../addmenu/addmenu.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulistPageRoutingModule,
    RouterModule.forChild([
      {
        path: '/menu',
        component: MenulistPage,
        children: [
          {
            path: '/add',
            component: AddmenuPage,
          },
        ],
      },
    ]),
  ],
  declarations: [MenulistPage],
})
export class MenulistPageModule {}
