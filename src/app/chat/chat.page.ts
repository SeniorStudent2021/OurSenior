import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
 
  messages: Observable<any[]>;
  newMsg = '';
 
  constructor( public navCtrl: NavController,private chatService: ChatService, public alertCtrl:AlertController,public router:Router,public datasrv:DataService, public route:ActivatedRoute) { }
  public orderid;
  public customer;
  public array:any[]=[];
  public sub;
  public x;
  public provider;
  public profit=0 ;
    ngOnInit() {
      this.messages = this.chatService.getChatMessages();

      this.sub = this.route.params.subscribe(params => {
      this.orderid= params['order']; 
        this.provider=  params['provider']; 
        this.customer=params['customer']; 
        
      
    });
  }
 
 
  sendMessage(to,orderid) {
    this.chatService.addChatMessage(this.newMsg,this.orderid,this.provider).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
 
 back(){
  this.navCtrl.back();
 }
 
}