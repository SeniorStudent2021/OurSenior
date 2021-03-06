import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-providerrequest',
  templateUrl: './providerrequest.page.html',
  styleUrls: ['./providerrequest.page.scss'],
})
export class ProviderrequestPage implements OnInit {


  constructor(public datasrv:DataService,public router:Router, public route:ActivatedRoute) { }
public id;
public sub;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    
  });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

details(id,y,z,x){
          this.router.navigate(['/details/'+id+'/'+y+'/'+z+'/'+this.id]);

}

}
