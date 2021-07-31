import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choosevehicle',
  templateUrl: './choosevehicle.page.html',
  styleUrls: ['./choosevehicle.page.scss'],
})
export class ChoosevehiclePage implements OnInit {
  constructor(public router:Router,public route:ActivatedRoute, public datasrv:DataService) { }
  public sub;
  public id;
  public type;
    ngOnInit() {
  
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
        this.type = params['type']; 
  
  
    });
    }
    car(x){
    this.router.navigate(['/order',this.id,this.type,x.id]);
    }
  
}
