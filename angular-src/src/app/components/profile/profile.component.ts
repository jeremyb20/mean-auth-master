import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;
  public user:any = {};
  address: string;
  phone: number;

  constructor(private authService:AuthService, private router:Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });
  }

  updateUserDetails(val) {
    const updateUser = {
      _id: this.user._id,
      name: this.user.name,
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      photo: this.user.photo,
      phone: this.user.phone,
      address: this.user.address
    }

    this.authService.updateUsers(updateUser).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        setTimeout(function () { location.reload(true); }, 500);
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
