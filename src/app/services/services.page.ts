import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(public route:ActivatedRoute, public router:Router) { }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }
 tow(){
  this.router.navigate(['/choosevehicle/'+this.id+'/Tow']); 

 }
 door(){
  this.router.navigate(['/choosevehicle/'+this.id+'/Door lock']); 

 }


}
