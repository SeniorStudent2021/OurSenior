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
    { title: 'My requests', url: '/activerequest/'+ this.uid, icon: 'flash' },

    { title: 'Add vehicle', url: '/addvehicle/'+ this.uid, icon: 'car' }
,
<<<<<<< HEAD
{ title: 'choose vehicle', url: '/choosevehicle/'+ this.uid, icon: 'car' },
    { title: 'Account', url: '/profile/'+ this.uid, icon: 'person' },
    { title: 'Contact us', url: '/contact/'+ this.uid, icon: 'call' },
    { title: 'Sign Up', url: '/signup', icon: 'person' },
=======
{ title: 'choose vehicle', url: '/choosevehicle', icon: 'car' },
    { title: 'Account', url: '/profile', icon: 'person' },
    { title: 'Contact us', url: '/contact', icon: 'call' },
    { title: 'Sign Up', url: '/signup', icon: 'person' }
<<<<<<< Updated upstream
=======
>>>>>>> 52b53cd0586be7213c2b1ca6f816b8181b327a40
>>>>>>> Stashed changes
 ];

       } });
    
 
  rootPage:any;

  constructor( public router:Router,public afAuth: AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe( 
      user => {
       if (user) {
        this.rootPage = 'services/'+ user.uid;
        authObserver.unsubscribe();
       } else {
        this.rootPage = 'login';
        authObserver.unsubscribe();
       }
      });
      
            


  }

  logout() {
   this.afAuth.signOut();
     this.router.navigate(['/login']); 
 
}
 }
