import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public datasrv:DataService, public route:ActivatedRoute,public router:Router) { 
  //  this.initializeapp();
  }
public id;
public sub;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });
  }
  initializeapp(){
    this.router.navigateByUrl("splash");
      }
}
