import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public datasrv:DataService,public afAuth:AngularFireAuth,public router:Router,public alertCtrl:AlertController) {
// if(this.datasrv.showsplash==0){
  // this.datasrv.showsplash=1;
    //this.initializeapp();
 //}
   }

  ngOnInit() {
  }
  
  public uid;
 async login(username,password){

    let alert =await  this.alertCtrl.create({
      header: 'Alert',
      cssClass: 'alertcolor',
      message: 'Incorrect username or password',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })

    this.afAuth.signInWithEmailAndPassword(username,password)
    .then((response)=>{
              this.router.navigate(['/home',response.user.uid]);

    }
    )
    .catch((err )=>{
    
      alert.present();
    
    }
    )
    
    }
    initializeapp(){
      this.router.navigateByUrl("splash");
        }
   
}
