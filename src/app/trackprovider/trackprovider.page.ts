import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trackprovider',
  templateUrl: './trackprovider.page.html',
  styleUrls: ['./trackprovider.page.scss'],
})
export class TrackproviderPage implements OnInit {

 
  constructor(public router:Router,public alertCtrl:AlertController,public geolocation: Geolocation,public datasrv:DataService, public route:ActivatedRoute) {


         this.mapTypeId= google.maps.MapTypeId.SATELLITE;
    this.geolocation.getCurrentPosition().then((resp) => {
     this.latit=  resp.coords.latitude;
     this.longit= resp.coords.longitude;
     this.markerPositions.push({lat: this.latit, lng: this.longit});
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
     public latit;
    public longit;
    public link;
  public id;
  public sub;
  public prov;
  
    ngOnInit() {
      this.mapTypeId= google.maps.MapTypeId.SATELLITE;
  
      
       this.markerPositions.push({lat: parseFloat(this.latit),lng: parseFloat(this.longit)});
       this.center= {lat: parseFloat(this.latit), lng:parseFloat(this.longit)};
         this.link="https://maps.google.com/?q="+this.latit+","+this.longit;
       
         this.markerPositions.push({lat:26.2111804 ,lng: 50.5570326});
    }
    
    @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
    center;
    
    markerOptions = {draggable: false,    icon: {
      url: "http://maps.google.com/mapfiles/kml/pal4/icon15.png"
    }};
    markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 10;
    display?: google.maps.LatLngLiteral;
    mapTypeId;
    zoomControl: false;
    scrollwheel: false;
    disableDoubleClickZoom: true;
   async serve(orderid,price,time){
    let alert =await  this.alertCtrl.create({
      header: 'Offer sent',
      cssClass: 'alertcolor',
      message: 'Your serve offer is sent to the customer',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',
  
      }]  
      })
  this.datasrv.addserveoffer(orderid,this.prov,price,time);
  //this.datasrv.updateorder(orderid,this.prov);
    //  this.router.navigate(['/current/'+this.prov]).then((respone)=>{
        alert.present();
      //});
      
    }
}
