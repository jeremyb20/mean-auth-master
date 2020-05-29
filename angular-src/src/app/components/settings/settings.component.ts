import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';


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

  private socket: any;

  constructor( private chat: ChatService) { }

  ngOnInit() {
    this.socket = io(environment.ws_url);
    this.chat.messages.subscribe(msg => {
      this.msgReceived.push(msg);
      this.username = msg.username
      // console.log(this.msgReceived);
    })
  }

  typing(val) {
    console.log(val);
    console.log(this.username);
    this.socket.emit('typing',this.username);

    this.socket.on('chat:typing',function(data){
      this.actions.innerHTML = `<p><em>${data} is typing a message</em></p>`;
    })
  }
  
  sendMessage() {
    this.data = {
      username: this.username,
      message: this.message
    }
    this.chat.sendMsg(this.data);
  }
}
