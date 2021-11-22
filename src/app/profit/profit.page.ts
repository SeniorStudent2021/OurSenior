import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.page.html',
  styleUrls: ['./profit.page.scss'],
})
export class ProfitPage implements OnInit {

  constructor(public afs: AngularFirestore, public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
  public id;
  public sub;
  public array:any[]=[];
  public x;
  public profit:number=0 ;
  public net:number=0;
  public tax:number;
  public tasleehEarning:number;
  public index:number=0;
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
         
        this.profit+=parseFloat(element.price);
        this.index++;
        }
      });
  this.tax=this.profit*0.15;    
  this.net=this.profit-this.tax;
  this.tasleehEarning=this.index*1.05;
    })
  }
  
  
  
  details(id,prov){
      this.router.navigate(['/paymentdetailsadmin/'+id+'/'+this.id])
  }
  

}
