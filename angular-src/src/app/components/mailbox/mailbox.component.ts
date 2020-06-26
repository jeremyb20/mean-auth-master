import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ResizeService } from '../../services/size-detector/resize-service';
import { SCREEN_SIZE } from '../../services/size-detector/screen-size.enum';
import { ChatService } from '../../services/chat.service';
import { delay } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  showBodyMsg: boolean;
  showHeaderMsg: boolean;
  sizeBoolean: boolean;
  isUserSigned: boolean;
  user: any;
  allUsers = [];
  getMessages =[];
  getMessageSent =[];
  searchTerm;
  itemsCopy;
  items = this.itemsCopy;
  itemUserSelected = [];
  email: string;
  messageSent: any;
  elementSigned = [];
  message: string;
  size: SCREEN_SIZE;
  data = {};

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

  constructor(
    private chat: ChatService,
    private authService: AuthService,
    private resizeSvc: ResizeService,
    private elementRef: ElementRef,
    private flashMessage: FlashMessagesService
  ) {
    this.resizeSvc.onResize$
    .pipe(delay(0))
    .subscribe(x => {
      this.size = x;
      this.sizeBoolean = (x == 0)? true: false;
    });

    if(!this.sizeBoolean || this.sizeBoolean == undefined){
      this.showBodyMsg = false;
      this.showHeaderMsg = true;
    }else{
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
        this.elementSigned.push(profile.user);
        let isNotempty = (this.itemUserSelected.length == 0)?false:true;
        this.test(this.itemUserSelected[0], isNotempty);
        this.email = profile.user.email;
        this.showHeaderMsg = true;
        this.getAllUsers();
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  search(): void {
    let term = this.searchTerm;
    this.allUsers = this.itemsCopy.filter(function(tag) {
        return tag.name.toLowerCase().indexOf(term) >= 0;
    }); 
  }

  getTimeNow(time) {
    return moment(time).format('hh:MM A');
  }

  test(val, isUserSelected): void {
    if(val != undefined && isUserSelected) {
      this.itemUserSelected.push(val);
      this.getUserMessages(val);
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

  getUserMessages(val){
    this.getMessages = [];
    val.message.forEach(item => {
      if(item.username == this.user.username){
        item.isUserSigned = false;
        this.getMessages.push(item);
      }  
    });
    this.user.message.forEach(element => {
      if(element.username == val.username){
        element.isUserSigned = true;
        this.getMessages.push(element);
      }
    });
    this.chat.messages.subscribe(msg => {
      this.getMessages.push(msg);
    })
  }

  // getUserMessages(val) { //this function bring al messages service by id
  //   this.authService.getUserMessages(val).subscribe(data => {
  //     this.getMessages = data;
  //     this.isUserSigned = true;
  //     this.message = '';
  //   },
  //   err => {
  //     return false;
  //   });
  // }

  goBackMail(val) {
    if(val){
      this.showBodyMsg = false;
      this.showHeaderMsg = true;
    }
  }

  getAllUsers(){
    var isLoggedd = this.authService.loggedIn();
    if(isLoggedd){
      this.authService.getUsers().subscribe(yesy => {
        this.allUsers = yesy;
        this.itemsCopy = yesy;
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
  }

  sendMessage(val) {
    //var timeNow = moment().format('LT'); //8:07 pm
    var timeNow = moment().format(); // 2020-04-09T18:36:23-06:00

    var day = moment().format('LL'); // april 6, 2020
    this.messageSent = {
      idUserSent : this.elementSigned[0]._id,//elementSigned
      username: this.itemUserSelected[0].username,//itemUserSelected
      message: val,
      timeNow: timeNow,
      day: day,
      phone: this.elementSigned[0].phone,
      isnew: true
    }

    this.data = {
      username: this.itemUserSelected[0].username,
      message: val,
      timeNow: timeNow
    }
    this.chat.sendMsg(this.data);

    this.authService.sendMessage(this.messageSent).subscribe(data => {
      if(data.success) {
          this.message = '';
          //setTimeout(()=>{    //<<<---    using ()=> syntax
            this.message = '';
            this.ngOnInit();
       //}, 3000);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
  },
  err => {
    console.log(err);
    return false;
  });
  }

}
