import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.page.html',
  styleUrls: ['./editusers.page.scss'],
})
export class EditusersPage implements OnInit {

  constructor(public datasrv:DataService,public route:ActivatedRoute,public router:Router,public alertCtrl:AlertController) { 


  }

  public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }
 edituser(id){
  this.router.navigate(['/editusers2/'+id]);

 }

}
