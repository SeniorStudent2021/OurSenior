import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditusersPageRoutingModule } from './editusers-routing.module';

import { EditusersPage } from './editusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditusersPageRoutingModule
  ],
  declarations: [EditusersPage]
})
export class EditusersPageModule {}
