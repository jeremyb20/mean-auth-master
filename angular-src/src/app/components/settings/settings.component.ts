import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  message: string;
  username: string;
  data: {};
  msgReceived = [];

  messageText: string;
  messages: Array<any>;
  avatar: string = 'https://api.adorable.io/avatars/40/abott@adorable.png';
  selfAuthored: boolean = false;

  //private socket: any;

  constructor( private chat: ChatService) { }

  ngOnInit() {
    // this.socket = io(environment.ws_url);
    // this.chat.messages.subscribe(msg => {
    //   this.msgReceived.push(msg);
    //   this.username = msg.username
    // })

    this.messages = new Array();
    this.chat.on('message-received',(msg:any)=> {
      this.messages.push(msg);
    });

    // this.chat.emit('event1', {
    //   msg:'Client to the server, can you fuck me?'
    // });
  
    // this.chat.on('event2',(data:any)=> {
    //   console.log(data.msg)
    //   this.chat.emit('event3', {
    //     msg: 'Yes its working for me'
    //   });
    // });
  
    //   this.chat.on('evet4', (data:any)=> {
    //     console.log(data.msg);
    //   });
  }

  // typing(val) {
  //   console.log(val);
  //   console.log(this.username);
  //   this.chat.emit('typing',this.username);

  //   this.chat.on('chat:typing',function(data){
  //     this.actions.innerHTML = `<p><em>${data} is typing a message</em></p>`;
  //   })
  // }
  
  sendMessage() {
    // this.data = {
    //   username: this.username,
    //   message: this.message
    // }
    // this.chat.sendMsg(this.data);

    const message = {
      text: this.messageText,
      date: new Date(),
      imageUrl: this.avatar
    }

    this.chat.emit('send-message', message);
    this.messageText ='';

  }
}
