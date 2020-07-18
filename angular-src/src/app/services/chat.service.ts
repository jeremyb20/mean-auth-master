import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { eventNames } from 'cluster';

@Injectable()
export class ChatService {
  socket: SocketIOClient.Socket;

  messages: Subject<any>

  constructor(private wsService : WebsocketService) { 
    this.messages = <Subject<any>>wsService
    .connect()
    .map((response:any):any => {
      return response;
    })

    this.socket = io.connect();
  }



  on(eventName: any, callback:any) {
    if(this.socket){
      this.socket.on(eventName, function(data:any){
        callback(data);
      });
    }
  };

  emit(eventName: any, data:any) {
    if(this.socket){
      this.socket.emit(eventName,data);
    }
  };

  removeListener(eventName: any) {
    if(this.socket){
      this.socket.removeListener(eventName);
    }
  };

  sendMsg(msg) {
    this.messages.next(msg);
  }

}
