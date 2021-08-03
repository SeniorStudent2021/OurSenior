import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activerequest',
  templateUrl: './activerequest.page.html',
  styleUrls: ['./activerequest.page.scss'],
})
export class ActiverequestPage implements OnInit {
public requests;
  constructor(public route:ActivatedRoute,public datasrv:DataService) {
    this.requests="active";
   }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }

}
