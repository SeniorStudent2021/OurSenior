import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Component, ViewChild} from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   public uid;
   public appPages;
   public appPages2;

 public authObserver = this.afAuth.authState.subscribe( 
            user => {
             if (user) {
              this.uid=user.uid;
 this.appPages = [
   
    { title: 'Services', url:'/services/'+ this.uid, icon: 'cog' },
    { title: 'My requests', url: '/activerequest/'+ this.uid, icon: 'flash' },

    { title: 'Add vehicle', url: '/addvehicle/'+ this.uid, icon: 'car' }
,


    { title: 'Account', url: '/profile/'+ this.uid, icon: 'person' },
    { title: 'Contact us', url: '/contact', icon: 'call' },
    


 ];
 this.appPages2 = [
  { title: 'Active requests', url: '/current/'+ this.uid, icon: 'flash' },

  { title: 'Pending requests', url:'/providerrequest/'+ this.uid, icon: 'hourglass' },
  { title: 'Payment statement', url: '/payment/'+ this.uid, icon: 'cash' },

  { title: 'Account', url: '/profile/'+ this.uid, icon: 'person' },
  { title: 'Contact us', url: '/contact', icon: 'call' } 


];

       } });
    
 
  rootPage:string;
  public latit=0;
  public longit=0;
  public link;
  constructor(public geolocation: Geolocation, public router:Router,public afAuth: AngularFireAuth, public datasrv:DataService) {

    const authObserver = afAuth.authState.subscribe( 
      user => {
       if (user) {

        this.rootPage = '/home/'+ user.uid;

        authObserver.unsubscribe();
       } else {
        this.rootPage = 'login';
        authObserver.unsubscribe();
       }
      });
      
            
      this.mapTypeId= google.maps.MapTypeId.SATELLITE;
      this.geolocation.getCurrentPosition().then((resp) => {
       this.latit=  resp.coords.latitude;
       this.longit= resp.coords.longitude;
       this.markerPositions.push({lat: this.latit, lng: this.longit})
       this.center= {lat: this.latit, lng:this.longit};
  
       this.link="https://maps.google.com/?q="+this.latit+","+this.longit;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.longitude
       });

  }
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center;
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 18;
  display?: google.maps.LatLngLiteral;
  mapTypeId;
  zoomControl: false;
  scrollwheel: false;
  disableDoubleClickZoom: true;
  
  addMarker(event: google.maps.MouseEvent) {

    this.markerPositions=[];
    this.markerPositions.push(event.latLng.toJSON());
   this.link="https://maps.google.com/?q="+event.latLng.toJSON().lat+","+event.latLng.toJSON().lng;

  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }
 

  logout() {
   this.afAuth.signOut();
     this.router.navigate(['/login']); 
 
}
 }
