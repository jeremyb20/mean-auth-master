import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {

  private socket: any; // socket that connects to our socket.io server

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url);
    let observable = new Observable(observer => {
        this.socket.on('message', (data)=> {
            // console.log("Received message from websocket server");
            observer.next(data);
        })

        return () => {
            this.socket.disconnect();
        };
    })

    let observer = {
        next: (data:Object) => {
            // this.socket.emit('message', JSON.stringify(data));
            this.socket.emit('message', data);
        },
    };

    return Rx.Subject.create(observer, observable)

  }
}
