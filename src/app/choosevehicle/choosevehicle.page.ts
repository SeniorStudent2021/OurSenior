import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choosevehicle',
  templateUrl: './choosevehicle.page.html',
  styleUrls: ['./choosevehicle.page.scss'],
})
export class ChoosevehiclePage implements OnInit {
  constructor(public route:ActivatedRoute) { }
  public sub;
  public id;
    ngOnInit() {
  
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
  
  
    });
    }
  
}
