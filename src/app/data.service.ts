import { Component, Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth,AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) { }
}
