import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public route:ActivatedRoute, public datasrv:DataService, public alertCtrl:AlertController) { }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }


  async update(x){
    let alert =await  this.alertCtrl.create({
      header: 'Profile updated',
      cssClass: 'alertcolor',
      message: 'Your profile have been updated successfully ',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })      
  
    this.datasrv.Updateprofile(x).then(() => {
     
      
        alert.present();
      });
    }
    




}
