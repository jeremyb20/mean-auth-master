import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onEmailSubmit() {
    const user = {
      email: this.email,
    }

    // Required Fields
    if(!this.validateService.validateEmailEmpty(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
    this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Register user
    this.authService.forgotPassword(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/forgot']);
      }
    });
  }

}
