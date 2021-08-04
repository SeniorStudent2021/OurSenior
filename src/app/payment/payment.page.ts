import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService,Order } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public afs: AngularFirestore, public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
public id;
public sub;
public array:any[]=[];
public x;
public profit=0 ;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });
}



details(id,prov){

    this.router.navigate(['/paymentdetails/'+id+'/'+prov])
}
}




