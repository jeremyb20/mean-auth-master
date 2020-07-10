import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  password: String;
  confirm: String;
  resetToken: null;
  CurrentState: any;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService) {
      this.route.params.subscribe(params => {
        this.resetToken = params.token;
        console.log(this.resetToken);
      });
    }

  ngOnInit() {
  }

  onResetSubmit() {
    const reset = {
      password: this.password,
      confirm: this.confirm,
      token: this.resetToken
    }

    // Required Fields
    if(!this.validateService.validatePasswordEmpty(reset)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //login user
    this.authService.resetPassword(reset).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
