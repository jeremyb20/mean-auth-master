import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { delay } from 'rxjs/operators';
import { ResizeService } from '../../services/size-detector/resize-service';
import { SCREEN_SIZE } from '../../services/size-detector/screen-size.enum';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
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
  datas:any;
  searchTerm: string;
  itemsCopy: Array<any>;;
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
    private elementRef: ElementRef,
    private authService: AuthService,
    ) {
      this.resizeSvc.onResize$
        .pipe(delay(0))
        .subscribe(x => {
          this.size = x;
          this.sizeBoolean = (x == 0) ? true : false;
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
      },
      err => {
        console.log(err);
        return false;
      });

      this.authService.getUsers().subscribe(users => {
        this.allUsers = users;
        this.itemsCopy = users;
        for (let i = 0; i < this.allUsers.length; ++i) {
          if (this.allUsers[i].email === this.email) {
            this.allUsers.splice(i, 1); // Remove even numbers
            // this.selectUserClick(this.allUsers[0],true);
          }
        } 
      },
      err => {
        return false;
      });
      this.messages = new Array();
      this.chat.on('message-received',(msg:any)=> {
        if(this.user.username == msg.username){
          msg.selfAuthored = false;
        }else {
          msg.selfAuthored = true;
        }
        //this.getUserMessages(msg, msg.selfAuthored);
        this.messages.push(msg);
        this.actions = '';
      });

      this.chat.on('typing',(data:any) => {
        if(data == 13) {
          this.actions = '';
        }
        if(data.text == ''){
          this.actions = '';
        }
        if(data.text == null) {
          this.actions = '';
        }
        if(data.text != undefined){
          this.actions = data.username + ' is typing a message';
        }else{
          this.actions = '';
        }
      });
    }
  }

  selectUserClick(val:any, isUserSelected:boolean): void {
    if(val != undefined && isUserSelected) {
      this.messages = [];
      this.itemUserSelected.push(val);
      this.getUserMessages(val.message, isUserSelected);
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
      if(data.length != undefined){
        if (data.length > 0) {
          data.forEach((item: { username: any; }) => {
            if (item.username == this.user.username) {
              this.messages.push(item);
            }
          });
          this.user.message.forEach((element: { selfAuthored: boolean; }) => {
            element.selfAuthored = true;
            this.messages.push(element);
          });
        }
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
