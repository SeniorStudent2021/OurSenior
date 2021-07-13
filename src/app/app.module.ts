import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

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
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,AngularFireAuthModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
