import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editusers2',
  templateUrl: './editusers2.page.html',
  styleUrls: ['./editusers2.page.scss'],
})
export class Editusers2Page implements OnInit {

  constructor(public datasrv:DataService,public route:ActivatedRoute,public router:Router,public alertCtrl:AlertController) { 


  }

  public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }
  
  async update(x){
    let alert =await  this.alertCtrl.create({
      header: 'User updated',
      cssClass: 'alertcolor',
      message: 'User type has been updated successfully ',
      buttons: [{
        text:'OK',
        role:'ok',
        cssClass:'alertbutton',

      }]    })      
  
    this.datasrv.Updateprofile(x).then(() => {
     
      
        alert.present();

      });
    }
    async delete(x){
      
    
      this.datasrv.deleteuser(x);
      this.router.navigate(['/editusers/'+this.id]);

        
    }
      

}
