import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-currentdetails',
  templateUrl: './currentdetails.page.html',
  styleUrls: ['./currentdetails.page.scss'],
})
export class CurrentdetailsPage implements OnInit {


  constructor(public alertCtrl:AlertController,public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
public id;
public sub;
public latit;
public longit;
public link;
public provid;
public price;
ngOnInit() {
  this.mapTypeId= google.maps.MapTypeId.SATELLITE;

  this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; 
    this.latit = params['lat']; 
    this.longit  = params['long']; 
    this.provid= params['prov']; 
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

async completed(id,price){
  let alert2 =await  this.alertCtrl.create({
    header: 'Price not entered',
    cssClass: 'alertcolor',
    message: 'Please enter the service price',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]  
    })
  if (this.price==null){
    alert2.present();

}
  let alert =await  this.alertCtrl.create({
    header: 'Request Completed',
    cssClass: 'alertcolor',
    message: 'Thank you for completing the request ',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]  
    })

    this.datasrv.completeorder(id,price);
    this.router.navigate(['/home/'+this.provid]).then((respone)=>{

    
      alert.present();
    });



}
}
