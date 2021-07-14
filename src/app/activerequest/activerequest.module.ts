import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiverequestPageRoutingModule } from './activerequest-routing.module';

import { ActiverequestPage } from './activerequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiverequestPageRoutingModule
  ],
  declarations: [ActiverequestPage]
})
export class ActiverequestPageModule {}
