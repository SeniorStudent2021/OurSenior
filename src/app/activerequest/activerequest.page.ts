import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activerequest',
  templateUrl: './activerequest.page.html',
  styleUrls: ['./activerequest.page.scss'],
})
export class ActiverequestPage implements OnInit {
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
cancel(id){
  this.datasrv.cancelorder(id);
}
details1(id){
  this.router.navigate(['/paymentdetailsadmin/'+id+'/'+this.id])

}
details2(id){
  this.router.navigate(['/paymentdetailsadmin/'+id+'/'+this.id])

}
}
