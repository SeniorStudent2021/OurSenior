import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})
export class AddvehiclePage implements OnInit {

  constructor(public route:ActivatedRoute,public datasrv:DataService,public alertCtrl:AlertController) { }
  public sub;
  public id;
    ngOnInit() {
  
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
  
  
    });
    }
  
async addvehicle(company,series,year,plate){
  this.datasrv.vehiclesCollectionRef.add({

    customerid:this.id,
    company:company,
    series:series,
    year:year,
    plateno:plate
  })   
  .then((respone)=>{
    alert.present();
  });
  let alert =await  this.alertCtrl.create({
    header: 'Car Added',
    cssClass: 'alertcolor',
    message: 'your Car have been Added successfully ',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]  
    })
}


}
