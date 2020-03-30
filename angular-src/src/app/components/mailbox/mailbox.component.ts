import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  user:Object;
  allUsers = [];
  searchTerm;
  itemsCopy;
  items = this.itemsCopy;
  itemUserSelected = [];
  email:string;
  elementSigned = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    var isLogged = this.authService.loggedIn();
      if(isLogged){
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          this.email = profile.user.email;
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
        return tag.name.indexOf(term) >= 0;
    }); 
  }

  test(val): void {
    this.itemUserSelected.push(val);
    if(this.itemUserSelected.length > 1){
      this.itemUserSelected.shift();
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
        this.itemUserSelected.push(yesy[0]);
    },
    err => {
      console.log(err);
      return false;
    });
    }
  }

}
