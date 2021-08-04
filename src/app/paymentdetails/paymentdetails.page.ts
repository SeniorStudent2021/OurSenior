import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.page.html',
  styleUrls: ['./paymentdetails.page.scss'],
})
export class PaymentdetailsPage implements OnInit {

  constructor( public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
public id;
public sub;
public array:any[]=[];
public x;
public prov;
public profit=0 ;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.prov=  params['prov']; 
    
  });
}
}
