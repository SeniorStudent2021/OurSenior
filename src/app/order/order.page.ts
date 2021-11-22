import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ThrowStmt } from '@angular/compiler';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public router:Router,public alertCtrl:AlertController,public datasrv:DataService,public route:ActivatedRoute,public geolocation: Geolocation,) { 

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
public sub;
public id;
public type;
public car; public latit=0;
  public longit=0;
  public notes;
  public link;
  ngOnInit() {
  
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.type = params['type']; 
      this.car=params['car'];

  });
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
  

  public spare;
  
Handler(event) {
  // get data throught event emitter
  this.spare = event.target.value;
}

  addMarker(event: google.maps.MouseEvent) {

    this.markerPositions=[];
    this.markerPositions.push(event.latLng.toJSON());
    this.latit=event.latLng.toJSON().lat;
    this.longit=event.latLng.toJSON().lng;
    this.center= {lat: this.latit, lng:this.longit};

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

  async confirm(notes){
    let alert =await  this.alertCtrl.create({
      header: 'Confirmation',
      cssClass: 'alertcolor',
      message: 'Your request has been submitted ',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })
      let alert3 =await  this.alertCtrl.create({
        header: 'Spare tyre',
        cssClass: 'alertcolor',
        message: 'Please specify if you have spare tyre or not ',
        buttons: [{
          text:'OK',
          role:'ok',
          cssClass:'alertbutton',
  
        }]    })
        let alertfuel =await  this.alertCtrl.create({
          header: 'Fuel type',
          cssClass: 'alertcolor',
          message: 'Please specify Fuel type',
          buttons: [{
            text:'OK',
            role:'ok',
            cssClass:'alertbutton',
    
          }]    })
      let alert2 =await  this.alertCtrl.create({
        header: 'Error',
        cssClass: 'alertcolor',

        message: ' Request not submitted, please try again ',
        buttons: [{
          text:'OK',
          role:'ok',
          cssClass:'alertbutton',

        }
        ]
});
if(this.type=="Flat tyre"&&this.spare==null){
  alert3.present();
}
if(this.type=="Fuel"&&this.spare==null){
  alertfuel.present();
}
if(this.type=="Flat tyre"&&this.spare!=null){
    this.datasrv.addordertyre(this.id,this.type,this.car,this.latit,this.longit,this.notes,this.spare).then((respone)=>{
    
      alert.present();   
      this.router.navigate(['/activerequest/'+this.id]); 

})

.catch((err)=>{
alert2.present();
 }) 

 }
 if(this.type=="Fuel"&&this.spare!=null){
  this.datasrv.addorderfuel(this.id,this.type,this.car,this.latit,this.longit,this.notes,this.spare).then((respone)=>{
  
    alert.present();   
    this.router.navigate(['/activerequest/'+this.id]); 

})

.catch((err)=>{
alert2.present();
}) 

}

if(this.type!="Flat tyre"&&this.type!="Fuel"){

  this.datasrv.addorder(this.id,this.type,this.car,this.latit,this.longit,this.notes).then((respone)=>{
    
    alert.present();   
    this.router.navigate(['/activerequest/'+this.id]); 

})
.catch((err)=>{
alert2.present();
}) 

}

}

}

