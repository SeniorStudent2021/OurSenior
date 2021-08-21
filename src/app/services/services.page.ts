import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(public route:ActivatedRoute, public router:Router, public datasrv:DataService) { }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }

  order(x){
    if (x=="Tow Truck"){
      this.router.navigate(['/choosevehicle/'+this.id+'/Tow']); 

    }
    if (x=="Flat Tyre"){
      this.router.navigate(['/choosevehicle/'+this.id+'/Flat tyre']); 
    }
    if (x=="Door Lock"){
      this.router.navigate(['/choosevehicle/'+this.id+'/Door lock']); 

    }
    if (x=="Battery Boosting"){
      this.router.navigate(['/choosevehicle/'+this.id+'/Battery charge']); 

    }
    if (x=="Out of Fuel"){
      this.router.navigate(['/choosevehicle/'+this.id+'/Fuel']); 

    }
    



  }

}
