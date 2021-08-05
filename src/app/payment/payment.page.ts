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
public profit:number=0 ;
public net:number=0;
public tax:number;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });

  this.afs.collection("Orders")
  .get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.array.push(doc.data())
       
        
      });
    this.array.forEach(element => {
      if(element.status=="completed"){
        if(element.providerid==this.id){
      this.profit+=element.price
      }}
    });
this.tax=this.profit*0.15;    
this.net=this.profit-this.tax;
  })
}



details(id,prov){
    this.router.navigate(['/paymentdetails/'+id+'/'+prov])
}


calculateprofit(){
  
}
}



