import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewordersPageRoutingModule } from './vieworders-routing.module';

import { ViewordersPage } from './vieworders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewordersPageRoutingModule
  ],
  declarations: [ViewordersPage]
})
export class ViewordersPageModule {}
