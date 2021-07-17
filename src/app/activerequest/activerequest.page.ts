import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activerequest',
  templateUrl: './activerequest.page.html',
  styleUrls: ['./activerequest.page.scss'],
})
export class ActiverequestPage implements OnInit {

  constructor(public route:ActivatedRoute) { }
public sub;
public id;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 


  });
  }

}
