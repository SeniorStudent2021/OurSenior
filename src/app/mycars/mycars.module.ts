import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycarsPageRoutingModule } from './mycars-routing.module';

import { MycarsPage } from './mycars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycarsPageRoutingModule
  ],
  declarations: [MycarsPage]
})
export class MycarsPageModule {}
