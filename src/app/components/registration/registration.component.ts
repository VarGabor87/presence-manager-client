import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import {UserModel} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRegistration: UserModel;

  constructor(private registrationService: RegistrationService) {
    this.userRegistration = new UserModel();
  }

  ngOnInit() {}

  registration() {

    if (Object.keys(this.userRegistration).length === 6) {
      this.registrationService.registration(this.userRegistration)
        .subscribe(
          (response) => {
            console.log(response);
          }, error => {
            console.log(error);
          });
    }
  }
}
