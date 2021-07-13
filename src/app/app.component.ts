import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Services', url: '/services', icon: 'cog' },
    { title: 'Add vehicle', url: '/addvehicle', icon: 'car' }
,
    { title: 'Account', url: '/login', icon: 'person' },
    { title: 'Contact us', url: '/contact', icon: 'call' }



    
  ];
  public uid;
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
