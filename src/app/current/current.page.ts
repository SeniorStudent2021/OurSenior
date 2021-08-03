import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

  constructor(public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
public id;
public sub;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });
  }
  activedetails(id,lat,long){
    this.router.navigate(['/currentdetails/'+id+'/'+lat+'/'+long+'/'+this.id]);


  }
}
