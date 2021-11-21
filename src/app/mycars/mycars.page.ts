import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.page.html',
  styleUrls: ['./mycars.page.scss'],
})
export class MycarsPage implements OnInit {

   constructor(public alertCtrl:AlertController,public router:Router,public route:ActivatedRoute, public datasrv:DataService) { }
  public sub;
  public id;
  public type;
    ngOnInit() {
  
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
  
  
    });
    }
 addcar(){
  this.router.navigate(['/addvehicle/'+this.id]);
}
async deletecar(id){
  let alert =await  this.alertCtrl.create({
    header: 'Car Deleted',
    cssClass: 'alertcolor',
    message: 'The selected car has been deleted',
    buttons: [{
      text:'OK',
      role:'ok',
      cssClass:'alertbutton',

    }]    })   

this.datasrv.vehiclesCollectionRef.doc(id).delete().then((response)=>{
    alert.present();
})
}
}
