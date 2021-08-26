import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.page.html',
  styleUrls: ['./vieworders.page.scss'],
})
export class ViewordersPage implements OnInit {
  public requests;
  constructor(public route:ActivatedRoute,public datasrv:DataService,public router:Router) {
    this.requests="active";
   }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }
  details1(id){

  }
  details2(id){

  }
}
