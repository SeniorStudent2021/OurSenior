import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentdetailsPageRoutingModule } from './currentdetails-routing.module';

import { CurrentdetailsPage } from './currentdetails.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentdetailsPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [CurrentdetailsPage],
  providers: [Geolocation]

})
export class CurrentdetailsPageModule {}
