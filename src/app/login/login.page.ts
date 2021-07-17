import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public afAuth:AngularFireAuth,public router:Router) { }

  ngOnInit() {
  }
  
  public uid;
  login(username,password){



    this.afAuth.signInWithEmailAndPassword(username,password)
    .then((response)=>{
              this.router.navigate(['/services',response.user.uid]);

    }
    )
    .catch((err )=>{
    
      alert("Incorrect username or password");
    
    }
    )
    
    }

   
}
