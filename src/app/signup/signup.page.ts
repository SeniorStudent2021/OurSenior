import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService,User } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public afAuth:AngularFireAuth, public router:Router,public alertCtrl:AlertController, public datasrv:DataService) { }

  ngOnInit() {
  }


 public item;
  async  signup(name, email ,password,mobile) {
    let alert =await  this.alertCtrl.create({
      header: 'Welcome',
      cssClass: 'alertcolor',
      message: 'you have been signed up successfully ',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })
      let alert2 =await  this.alertCtrl.create({
        header: 'Error',
        cssClass: 'alertcolor',

        message: ' User not created ',
        buttons: [{
          text:'OK',
          role:'ok',
          cssClass:'alertbutton',

        }
        ]
});
      this.afAuth.createUserWithEmailAndPassword(email, password)

      .then((respone)=>{
       alert.present();
      
       this.item={id:respone.user.uid,email:email,type:"customer",name:name,mobile:mobile};
    
        this.datasrv.usersCollectionRef.doc(respone.user.uid).set(this.item)
         this.afAuth.signInWithEmailAndPassword(email,password);

        return  this.router.navigate(['/services/'+respone.user.uid]); 


       
       
})
.catch((err)=>{
alert2.present();
  }) 
}
 
    

}
