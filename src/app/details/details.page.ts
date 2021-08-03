import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public router:Router,public alertCtrl:AlertController,public geolocation: Geolocation,public datasrv:DataService, public route:ActivatedRoute) {


  //  this.geolocation.getCurrentPosition().then((resp) => {
    // this.latit=  resp.coords.latitude;
    // this.longit= resp.coords.longitude;
     //this.markerPositions.push({lat: this.latit, lng: this.longit});
     //this.center= {lat: this.latit, lng:this.longit};
  
   //  this.link="https://maps.google.com/?q="+this.latit+","+this.longit;
    // }).catch((error) => {
      // console.log('Error getting location', error);
    // });
     
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

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.latit = params['lat']; 
      this.longit  = params['long']; 
    this.prov = params['prov']; 
  });
     this.markerPositions.push({lat: parseFloat(this.latit),lng: parseFloat(this.longit)});
     this.center= {lat: parseFloat(this.latit), lng:parseFloat(this.longit)};
       this.link="https://maps.google.com/?q="+this.latit+","+this.longit;

  }
  
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  center;
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  mapTypeId;
  zoomControl: false;
  scrollwheel: false;
  disableDoubleClickZoom: true;
 async serve(orderid){
  let alert =await  this.alertCtrl.create({
    header: 'Request accepted',
    cssClass: 'alertcolor',
    message: 'The customer is waiting for you ',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]  
    })

this.datasrv.updateorder(orderid,this.prov);
    this.router.navigate(['/current/'+this.prov]).then((respone)=>{
      alert.present();
    });
    
  }
}
