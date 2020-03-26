import { Component ,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user:Object;
  test = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

    ngOnInit() {
      var isLogged = this.authService.loggedIn();
      if(isLogged){
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
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
    location.reload(true);
    this.router.navigate(['dashboard']);
  }

  openModel() {
    $("#myModal").modal('show');
  }

  closeModel(val) {
    if(val){
      this.onLogoutClick();
      $("#myModal").modal('hide');
    }else{
      $("#myModal").modal('hide');
    }
  }
}
