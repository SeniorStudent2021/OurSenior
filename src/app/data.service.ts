import { Component, Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth,AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import * as firebase from 'firebase/app';




export interface User {
  id?:string,
  email?:string,
  name?: string,
  mobile?:number,
  type?:any,

}
export interface Order{
  customerid?:any;
  type?:any;
  status?: any,
  date?:any,
  address?:any,
 


}
export interface Vehicle{
  customerid?:any;
  company?:any;
  series?: any,
  year?:any,
  plateno?:any,

}




@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:Observable<User[]>;
  usersCollectionRef:AngularFirestoreCollection<User>;

  orders:Observable<Order[]>;
  ordersCollectionRef:AngularFirestoreCollection<Order>;

  vehicles:Observable<Vehicle[]>;
  vehiclesCollectionRef:AngularFirestoreCollection<Vehicle>;
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) { 
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
      
        
        });

        
  }






}
