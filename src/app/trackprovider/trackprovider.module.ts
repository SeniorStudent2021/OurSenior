import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackproviderPageRoutingModule } from './trackprovider-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TrackproviderPage } from './trackprovider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackproviderPageRoutingModule,GoogleMapsModule
  ],
  declarations: [TrackproviderPage],
  providers: [Geolocation]

})
export class TrackproviderPageModule {}
