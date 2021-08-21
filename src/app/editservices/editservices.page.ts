import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editservices',
  templateUrl: './editservices.page.html',
  styleUrls: ['./editservices.page.scss'],
})
export class EditservicesPage implements OnInit {

  constructor(public datasrv:DataService,public route:ActivatedRoute,public router:Router,public alertCtrl:AlertController) { 


  }

  public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }
 
 deleteservice(id){
   
    this.datasrv.deleteservice(id) 
  }


  addserv(){
    this.router.navigate(['/newservice/'+this.id]);
    }
}
