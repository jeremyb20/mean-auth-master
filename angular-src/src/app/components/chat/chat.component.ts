import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { delay } from 'rxjs/operators';
import { ResizeService } from '../../services/size-detector/resize-service';
import { SCREEN_SIZE } from '../../services/size-detector/screen-size.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  showBodyMsg: boolean;
  showHeaderMsg: boolean;
  sizeBoolean: boolean;
  user: any;
  message: string;
  username: string;
  data: {};
  msgReceived = [];

  messageText: string;
  messages: Array<any>;
  avatar: string = 'https://api.adorable.io/avatars/40/abott@adorable.png';
  selfAuthored: boolean = false;
  actions: string;
  writing: string;
  datas:any;
  searchTerm: string;
  itemsCopy: Array<any>;
  lastMessage: Array<any>;
  items = this.itemsCopy;
  itemUserSelected = [];

  allUsers = [];
  email: string;
  
  size: SCREEN_SIZE;
  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS, name: 'xs',
      css: `d-block d-sm-none`
    },
    {
      id: SCREEN_SIZE.SM, name: 'sm',
      css: `d-none d-sm-block d-md-none`
    },
    {
      id: SCREEN_SIZE.MD, name: 'md',
      css: `d-none d-md-block d-lg-none`
    },
    {
      id: SCREEN_SIZE.LG, name: 'lg',
      css: `d-none d-lg-block d-xl-none`
    },
    {
      id: SCREEN_SIZE.XL, name: 'xl',
      css: `d-none d-xl-block`
    },
  ];

  //private socket: any;

  constructor( private chat: ChatService,
    private resizeSvc: ResizeService,
    private router: Router,
    private elementRef: ElementRef,
    private authService: AuthService,
    ) {
      this.resizeSvc.onResize$
        .pipe(delay(0))
        .subscribe(x => {
          this.size = x;
          this.sizeBoolean = (x <= 1) ? true : false;
        });

      if (!this.sizeBoolean || this.sizeBoolean == undefined) {
        this.showBodyMsg = false;
        this.showHeaderMsg = true;
      } else {
        this.showHeaderMsg = true;
        this.showBodyMsg = false;
      }
     }

     @HostListener("window:resize", [])
     private onResize() {
       this.detectScreenSize();
     }
   
     ngAfterViewInit() {
       this.detectScreenSize();
     }
   
     private detectScreenSize() {
       const currentSize = this.sizes.find(x => {
         const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);
         const isVisible = window.getComputedStyle(el).display != 'none';
   
         return isVisible;
       });
   
       this.resizeSvc.onResize(currentSize.id);
     }

  ngOnInit() {
    const isLogged: boolean = this.authService.loggedIn();
    if (isLogged) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.email = profile.user.email;
        this.getAllUsers();
        this.getLast(profile.user.message, true);
      },
      err => {
        console.log(err);
        return false;
      });

      this.messages = new Array();
      this.chat.on('message-received',(msg:any)=> {
        if(this.user.username == msg.username){
          msg.selfAuthored = false;
        }else {
          msg.selfAuthored = true;
        }
        this.getUserMessages(msg, false);
        this.getLast(msg,false);
        this.actions = '';
        this.writing = '';
      });

      this.chat.on('typing',(data:any) => {
        if(data == 13) {
          this.actions = '';
          this.writing = '';
        }
        if(data.text == ''){
          this.actions = '';
          this.writing = '';
        }
        if(data.text == null) {
          this.actions = '';
          this.writing = '';
        }
        if(data.text != undefined){
          this.actions = data.username + ' is typing a message';
          this.writing = 'Typing...'
        }else{
          this.actions = '';
          this.writing = '';
        }
      });
    }else {
      this.router.navigate(['/login']);
    }
  }

  getAllUsers(){
    this.authService.getUsers().subscribe((data: any) => {
      this.allUsers = data as string[];
      this.itemsCopy = data;
      for (let i=0; i < this.allUsers.length; ++i) {
        if (this.allUsers[i].email === this.email) {
          this.allUsers.splice(i, 1); // Remove even numbers
        }
      }
    },
    err => {
      return false;
    });
  }

  selectUserClick(val:any, isUserSelected:boolean): void {
    if(val != undefined && isUserSelected) {
      this.messages = [];
      this.itemUserSelected.push(val);
      this.getUserMessages(val, isUserSelected);
      if (this.itemUserSelected.length > 1) {
        this.itemUserSelected.shift();
      }
      if (isUserSelected && this.sizeBoolean) {
        this.showBodyMsg = true;
        this.showHeaderMsg = false;
      } else {
        this.showHeaderMsg = true
      }
    }
  }

  getUserMessages(data:any, isMsgSent: boolean ){
    if(!isMsgSent){
      this.messages.push(data);
      this.allUsers.forEach((element: {username: any; lastMessage: Array<any> } ) => {
        if(data.username == element.username){
          element.lastMessage.push(data);
        }
        if(element.lastMessage.length > 1) {
          element.lastMessage.shift();
        }
      });
    }else{
      if(data.message.length != undefined){
        if(data.message.length >= 0) {
          this.authService.getUserMessages(this.user._id).subscribe(item => {
            item.forEach((item: { username: any; selfAuthored:boolean; }) => {
              if (item.username == data.username) {
                item.selfAuthored = true;
                this.messages.push(item);
              }
            });
          },
          err => {
            return false;
          });
          this.authService.getUserMessages(data._id).subscribe(value => {
            value.forEach((item: { username: any; selfAuthored:boolean; }) => {
              if (item.username == this.user.username) {
                item.selfAuthored = false;
                this.messages.push(item);
                this.sortDate(this.messages);
              }
            });
          },
          err => {
            return false;
          });
        }
      }
    }
  }

  sortDate(val:any) {
    if(val != undefined) {
      

      var bar = new Promise((resolve, reject) => {
        val.sort((a, b) => {
          resolve()
          return <any>new Date(a.date) - <any>new Date(b.date)  
        });
    });
    bar.then(() => {
      this.getLast(val.slice(-1)[0], true);
    });
    }
  }

  getLast(val:any, isBolean: boolean){
    if(isBolean) {
      if(val != undefined) {
        if(val.length > 0){
          this.lastMessage = val.slice(-1)[0].username;
          this.allUsers.forEach((element: { username: any; lastMessage: Array<any>; message: Array<any>; }) => {
            if (this.lastMessage == element.username) {
              var object = element.message.slice(-1)[0];
              element.lastMessage.push(object);
            }
            if (element.lastMessage.length > 1) {
              element.lastMessage.shift();
            }
          });
        }else{
          this.allUsers.forEach((element: { username: any; lastMessage: Array<any>; message: Array<any>; }) => {
            if (val.username == element.username) {
              element.lastMessage.push(val);
            }
            if (element.lastMessage.length > 1) {
              element.lastMessage.shift();
            }
          });
        }
      }
    }else{
      this.allUsers.forEach((item: {_id: any; lastMessage: Array<any> } ) => {
        if(val.idUserSent == item._id){
          item.lastMessage.push(val);
        }
        if(item.lastMessage.length > 1) {
          item.lastMessage.shift();
        }
      });
    }
  }

  goBackMail(val: boolean) {
    if(val){
      this.showBodyMsg = false;
      this.showHeaderMsg = true;
    }
  }

  search(): void {
    let term = this.searchTerm;
    this.allUsers = this.itemsCopy.filter(function(tag) {
        return tag.name.toLowerCase().indexOf(term) >= 0;
    }); 
  }

  typing(val:string) {
    this.actions = ''
    this.writing = '';
    if(val != undefined){
      if (val.length == 1) {
        const data = {
          username: this.user.username,
          text: null
        }
        this.chat.emit('typing', data);
      } else {
        const data = {
          username: this.user.username,
          text: val
        }
        this.chat.emit('typing', data);
      }
    }
  }

  onEnter(e){
    this.chat.emit('typing', e.keyCode);
  }
  
  sendMessage() {
    const sendMessage = {
      idUserSent : this.user._id,
      username: this.itemUserSelected[0].username,
      message: this.messageText,
      date: new Date(),
      imageUrl: this.avatar
    }

    if(sendMessage.message != undefined ){
      if(sendMessage.message != ''){
        this.chat.emit('send-message', sendMessage);
        this.messageText = '';
      }
    }
  }

}
