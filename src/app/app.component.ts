import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   public uid;
   public appPages;
 public authObserver = this.afAuth.authState.subscribe( 
            user => {
             if (user) {
              this.uid=user.uid;
 this.appPages = [
   
    { title: 'Services', url:'/services/'+ this.uid, icon: 'cog' },
    { title: 'My requests', url: '/activerequest', icon: 'flash' },

    { title: 'Add vehicle', url: '/addvehicle', icon: 'car' }
,
{ title: 'choose vehicle', url: '/choosevehicle', icon: 'car' },
    { title: 'Account', url: '/profile', icon: 'person' },
    { title: 'Contact us', url: '/contact', icon: 'call' },
    { title: 'Sign Up', url: '/signup', icon: 'person' }
 ];

       } });
    
 
  rootPage:any;

  constructor( public router:Router,public afAuth: AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe( 
            user => {
             if (user) {
              this.uid=user.uid;
      
              this.router.navigate(['/services',this.uid]);
      
              authObserver.unsubscribe();
             } else {
             
              this.router.navigate(['/login']);  //login page
              authObserver.unsubscribe();
             }
            });
            


  }

 }
