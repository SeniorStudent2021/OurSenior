import { Component, Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth,AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';




export interface User {
  id?:string,
  email?:string,
  name?: string,
  mobile?:number,
  type?:any;

}
export interface Services {
  id?:string,

  name?: string,
 img?:any;

}
export interface Order{
  customerid?:any,
  type?:any ,
  status?: any,
  date?:any,
  address?:any,
  notes?:any,
  car?:any,
  latitude?:any,
  longtitude?:any,
  providerid?:any;
  price?:any;
spare?:any;

}
export interface Vehicle{
  customerid?:any,
  company?:any,
  series?: any,
  year?:any,
  plateno?:any;

}




@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:Observable<User[]>;
  usersCollectionRef:AngularFirestoreCollection<User>;

  services:Observable<Services[]>;
  servicesCollectionRef:AngularFirestoreCollection<Services>;

  orders:Observable<Order[]>;
  ordersCollectionRef:AngularFirestoreCollection<Order>;

  vehicles:Observable<Vehicle[]>;
  vehiclesCollectionRef:AngularFirestoreCollection<Vehicle>;
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore,public alertCtrl:AlertController) { 
    this.usersCollectionRef = this.afs.collection('Users'); 
       // this.products = this.productsCollectionRef.valueChanges();
        this.users=this.usersCollectionRef.snapshotChanges().pipe(
    
          map(actions => {
    
            return actions.map(a => {
    
              const data = a.payload.doc.data();
    
              const id = a.payload.doc.id;
    
              return { id, ...data };
    
            });
    
          })
        );


        this.servicesCollectionRef = this.afs.collection('Services'); 
           // this.products = this.productsCollectionRef.valueChanges();
            this.services=this.servicesCollectionRef.snapshotChanges().pipe(
        
              map(actions => {
        
                return actions.map(a => {
        
                  const data = a.payload.doc.data();
        
                  const id = a.payload.doc.id;
        
                  return { id, ...data };
        
                });
        
              })
            );
    
        this.ordersCollectionRef = this.afs.collection('Orders'); 
       // this.products = this.productsCollectionRef.valueChanges();
        this.orders=this.ordersCollectionRef.snapshotChanges().pipe(
    
          map(actions => {
    
            return actions.map(a => {
    
              const data = a.payload.doc.data();
    
              const id = a.payload.doc.id;
    
              return { id, ...data };
    
            });
    
          })
    
        );
    

        this.vehiclesCollectionRef = this.afs.collection('Vehicles'); 
       // this.products = this.productsCollectionRef.valueChanges();
        this.vehicles=this.vehiclesCollectionRef.snapshotChanges().pipe(
    
          map(actions => {
    
            return actions.map(a => {
    
              const data = a.payload.doc.data();
    
              const id = a.payload.doc.id;
    
              return { id, ...data };
    
            });
    
          })
    
        );

  }

  Updateprofile(item:User): Promise<any> {

    return this.usersCollectionRef.doc(item.id).update( {
        name: item.name, 
        email :item.email,
        mobile:item.mobile,
      type:item.type
        
        });

        
  }

public date;
addorder(customer,type,car,lat,long,notes){
  if(notes==null){


    this.date=new Date();
    return this.ordersCollectionRef.add({
      customerid:customer,
      type:type,
      car:car,
      latitude:lat,
      longtitude:long,
      status:"pending",
      date:this.date.toString()
        });
  


  }
  if(notes!=null){

this.date=new Date();
  return this.ordersCollectionRef.add({
    customerid:customer,
    type:type,
    car:car,
    latitude:lat,
    longtitude:long,
    notes:notes,
    status:"pending",
    date:this.date.toString()
      });

}
}
addservice(name,img){
 
    return this.servicesCollectionRef.add({
   name:name,
   img:img
        });

  }
  async deleteuser(x) {
    let alert =await  this.alertCtrl.create({
      header: 'User Deleted',
      cssClass: 'alertcolor',
      message: 'The selected user has been deleted successfully ',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })  
          let alert2 =await  this.alertCtrl.create({
        header: 'User not Deleted',
        cssClass: 'alertcolor',
        message: 'The selected user has not been deleted, please try again ',
        buttons: [{
          text:'OK',
          role:'ok',
          cssClass:'alertbutton',
  
        }]    })   
    
    this.usersCollectionRef.doc(x.id).delete().then((response)=>{
        alert.present();
    })
    
    .catch((err )=>{
    
      alert2.present();
    
    }) 

}


 async deleteservice(id) {
    let alert =await  this.alertCtrl.create({
      header: 'Service Deleted',
      cssClass: 'alertcolor',
      message: 'The service has been deleted successfully',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',
  
      }]    })
      let alert2 =await  this.alertCtrl.create({
        header: 'Service not Deleted',
        cssClass: 'alertcolor',
        message: 'The service has not been deleted, please try again',
        buttons: [{
          text:'OK',
          role:'ok',
          cssClass:'alertbutton',
    
        }]    })
    
    this.servicesCollectionRef.doc(id).delete().then((response)=>{
        alert.present();
    })
    
    .catch((err )=>{
    
      alert2.present();
    
    }) 

}


async cancelorder(id) {
  let alert =await  this.alertCtrl.create({
    header: 'Request canceled',
    cssClass: 'alertcolor',
    message: 'The request has been Canceled',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]    })
    let alert2 =await  this.alertCtrl.create({
      header: 'Request not canceled',
      cssClass: 'alertcolor',
      message: 'The request has not been canceled, please try again',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',
  
      }]    })
  
  this.ordersCollectionRef.doc(id).delete().then((response)=>{
      alert.present();
  })
  
  .catch((err )=>{
  
    alert2.present();
  
  }) 

}


addordertyre(customer,type,car,lat,long,notes,spare){
  if(notes==null){


    this.date=new Date();
    return this.ordersCollectionRef.add({
      customerid:customer,
      type:type,
      car:car,
      latitude:lat,
      longtitude:long,
      status:"pending",
      date:this.date.toString(),
      spare:spare
        });
  


  }
  if(notes!=null){

this.date=new Date();
  return this.ordersCollectionRef.add({
    customerid:customer,
    type:type,
    car:car,
    latitude:lat,
    longtitude:long,
    notes:notes,
    status:"pending",
    date:this.date.toString(),
    spare:spare

      });

}
}

updateorder(orderid,provid): Promise<any> {

  return this.ordersCollectionRef.doc(orderid).update( {
    status:"serving",
    providerid:provid

      
      });

      
}
completeorder(orderid,price): Promise<any> {

  return this.ordersCollectionRef.doc(orderid).update( {
    status:"completed",
    price:price

      
      });

      
}
public showsplash=0;
}
