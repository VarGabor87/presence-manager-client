import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import {UserModel} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRegistration: UserModel;

  constructor(private registrationService: RegistrationService,
              private router: Router) {
    this.userRegistration = new UserModel();
  }

  ngOnInit() {}

  registration() {

    if (Object.keys(this.userRegistration).length === 6) {
      this.registrationService.registration(this.userRegistration)
        .subscribe(
          () => {
            console.log('sikeres regisztrácio');
            this.router.navigate(['']);
          }, error => {
            alert('A megadott adat hibás, vagy már használatban van.');
            console.log(error);
          });
    }
  }
}
