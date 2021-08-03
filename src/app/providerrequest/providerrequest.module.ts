import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderrequestPageRoutingModule } from './providerrequest-routing.module';

import { ProviderrequestPage } from './providerrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderrequestPageRoutingModule
  ],
  declarations: [ProviderrequestPage]
})
export class ProviderrequestPageModule {}
