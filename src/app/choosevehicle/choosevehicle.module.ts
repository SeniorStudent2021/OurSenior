import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosevehiclePageRoutingModule } from './choosevehicle-routing.module';

import { ChoosevehiclePage } from './choosevehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosevehiclePageRoutingModule
  ],
  declarations: [ChoosevehiclePage]
})
export class ChoosevehiclePageModule {}
