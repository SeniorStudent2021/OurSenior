import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public datasrv:DataService,public route:ActivatedRoute,public geolocation: Geolocation,) { 
          

  }
public sub;
public id;
public type;
public car; public latit=0;
  public longit=0;
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

   confirm(notes){
     

 }
}

