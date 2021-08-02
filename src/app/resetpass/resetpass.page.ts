import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  constructor(public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  reset(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
}


}
