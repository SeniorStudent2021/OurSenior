import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-paymentdetailsadmin',
  templateUrl: './paymentdetailsadmin.page.html',
  styleUrls: ['./paymentdetailsadmin.page.scss'],
})
export class PaymentdetailsadminPage implements OnInit {
  constructor( public alertCtrl:AlertController,public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
public id;
public sub;
public array:any[]=[];
public x;
public prov;
public profit=0 ;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.prov=  params['admin']; 
      
    
  });
}
async accept(provider,price,orderid){
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
  this.datasrv.updateorder(orderid,provider,price);
  this.datasrv.deleteserveoffer(orderid);
  
}
chat(orderid,customer,provider){
  this.router.navigate(['/chat/'+orderid+'/'+customer+'/'+provider])
}
}
