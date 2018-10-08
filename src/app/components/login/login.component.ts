import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {AppStateService} from '../../app-state.service';
import {LoginService} from '../../services/login.service';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: Boolean;
  isBadRequest: Boolean;
  userLogin: UserModel;

  constructor(private authService: AuthenticationService,
              private appStateService: AppStateService,
              private router: Router,
              private loginService: LoginService) {
              this.userLogin = new UserModel();
  }

  ngOnInit() {
    this.appStateService.isUserLoggedIn.subscribe(value => this.isUserLoggedIn = value);
    this.loginService.isBadRequest.subscribe(value => this.isBadRequest = value);
  }

  login() {
    if (Object.keys(this.userLogin).length > 1) {
      this.authService.login(this.userLogin)
        .subscribe(
          () => {
            this.appStateService.isLoggedIn();
            if (this.userLogin.isGeneratedPassword === true) {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['/newpassword']);
            }
          }, error => {
            if (error === 'Bad Request') {
              this.loginService.isBadRequest.next(true);
            }
          });
    }
  }

  closeBadRequestWarning() {
    this.loginService.isBadRequest.next(false);
  }
}
