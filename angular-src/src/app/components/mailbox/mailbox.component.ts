import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  user: Object;
  allUsers = [];
  searchTerm;
  itemsCopy;
  items = this.itemsCopy;
  itemUserSelected = [];
  email: string;
  elementSigned = [];
  message: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    const isLogged: boolean = this.authService.loggedIn();
      if (isLogged) {
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
          this.elementSigned.push(profile.user);
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
      return false;
    });
    }
  }

  sendMessage(val) {
    const message = {
      id : this.elementSigned[0]._id,
      idUserSent : this.itemUserSelected[0]._id,
      email : this.elementSigned[0].email,
      name : this.elementSigned[0].name,
      username: this.elementSigned[0].username,
      message: val,
      isNew: true
    }

    this.authService.sendMessage(message).subscribe(data => {
      // console.log(data);
  },
  err => {
    console.log(err);
    return false;
  });
  }

}
