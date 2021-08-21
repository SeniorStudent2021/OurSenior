import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.page.html',
  styleUrls: ['./newservice.page.scss'],
})
export class NewservicePage implements OnInit {
  public id;
public sub;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });
  }

  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;


  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;

  
  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
 ,public datasrv:DataService , public alertCtrl:AlertController, public route:ActivatedRoute,public router:Router) {
    this.isImgUploading = false;
    this.isImgUploaded = false;
    

  }

public imagepath="";
  fileUpload(event: FileList,name) {
      
      const file = event.item(0)

      if (file.type.split('/')[0] !== 'image') { 
        console.log('File type is not supported!')
        return;
      }

      this.isImgUploading = true;
      this.isImgUploaded = false;

      this.FileName = file.name;

      const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

      const imageRef = this.angularFireStorage.ref(fileStoragePath);

      this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

      this.progressNum = this.ngFireUploadTask.percentageChanges();
      this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
        
        finalize(() => {
          this.fileUploadedPath = imageRef.getDownloadURL();
          
          this.fileUploadedPath.subscribe(resp=>{
           this.imagepath=resp;
            this.isImgUploading = false;
            this.isImgUploaded = true;
          },error => {
            console.log(error);
          })
        }),
        tap(snap => {
            this.FileSize = snap.totalBytes;
        })
      )
  }


 async addservice(name) {
  let alert =await  this.alertCtrl.create({
    header: 'Service added',
    cssClass: 'alertcolor',
    message: 'The new service has been added successfully',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]    })
    let alert2 =await  this.alertCtrl.create({
      header: 'Service not added',
      cssClass: 'alertcolor',
      message: 'The new service has not been added, please try again',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',
  
      }]    })
this.datasrv.addservice(name,this.imagepath) .then((response)=>{
    alert.present();
          this.router.navigate(['/editservices',this.id]);

})

.catch((err )=>{

  alert2.present();

})
 
 


}
}
