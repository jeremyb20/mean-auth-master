import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  user:Object;
  allUsers: Object;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    var isLogged = this.authService.loggedIn();
      if(isLogged){
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          this.getAllUsers();
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  getAllUsers(){
    var isLoggedd = this.authService.loggedIn();
    if(isLoggedd){
      this.authService.getUsers().subscribe(yesy => {
        this.allUsers = yesy;
    },
    err => {
      console.log(err);
      return false;
    });
    }
  }

}
