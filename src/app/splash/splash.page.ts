import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Location} from '@angular/common';
declare var dynamics: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router:Router,private location: Location) { 
    
  setTimeout(()=>{
    this.location.back();}
     ,3000);   
    }
  
  ngOnInit() {
  }

}
