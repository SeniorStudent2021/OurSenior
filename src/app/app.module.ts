import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
const firebaseConfig = {
  apiKey: "AIzaSyBlQoOxR041Usv5AAQvthwEKZBXl7oOsUw",
  authDomain: "roadside-bcd65.firebaseapp.com",
  projectId: "roadside-bcd65",
  storageBucket: "roadside-bcd65.appspot.com",
  messagingSenderId: "148597733755",
  appId: "1:148597733755:web:2f61e9e6fdebd86e3265de"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,GoogleMapsModule
    ,AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}
