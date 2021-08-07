import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService,User } from '../data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  myForm: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder,public afAuth:AngularFireAuth, public router:Router,public alertCtrl:AlertController, public datasrv:DataService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required,Validators.minLength(8),
        Validators.maxLength(8), Validators.pattern('^[0-9]+$')]],
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      cpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')

      ])),
    },
     { 
     
    });
    
  }
 

  get errorCtr() {
    return this.myForm.controls;
  }
  public item;

  async onSubmit(name,email,password,mobile) {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.myForm.value)
    }
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

      this.afAuth.createUserWithEmailAndPassword(this.myForm.value['email'], this.myForm.value['password'])

      .then((respone)=>{
       alert.present();
      
       this.item={id:respone.user.uid,email:email,type:"customer",name:name,mobile:mobile};
    
        this.datasrv.usersCollectionRef.doc(respone.user.uid).set(this.item)
         this.afAuth.signInWithEmailAndPassword(email,password);

        return  this.router.navigate(['/services/'+respone.user.uid]); 


       
       
})

.catch((geterr)=>{
  
alert2.present();
  }) 
}
 
  }

 /*
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
 
    
*/

