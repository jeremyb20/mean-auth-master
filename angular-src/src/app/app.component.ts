import { Component ,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user:any;
  test = false;
  isFoo:boolean = false;

  constructor(
    private authService: AuthService,
    private chat: ChatService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

    ngOnInit() {
      var isLogged = this.authService.loggedIn();
      if(isLogged){
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          var user = {
            username: this.user.username,
            status: 'Online'
          }
          this.chat.emit('user-connected', user);
      },
       err => {
         console.log(err);
         return false;
      });
      }
    }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['login']);
    return false;
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }

  openModel() {
    $("#myModal").modal('show');
  }

  closeModel(val) {
    if(val){
      var user = {
        username: this.user.username,
        status: 'Offline'
      }
      this.chat.emit('user-connected', user);
      this.onLogoutClick();
      $("#myModal").modal('hide');
    }else{
      $("#myModal").modal('hide');
    }
  }
}
