import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editusers2PageRoutingModule } from './editusers2-routing.module';

import { Editusers2Page } from './editusers2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editusers2PageRoutingModule
  ],
  declarations: [Editusers2Page]
})
export class Editusers2PageModule {}
