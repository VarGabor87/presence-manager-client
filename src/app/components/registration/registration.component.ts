import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import {UserModel} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import {GroupsService} from '../../services/groups.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRegistration: UserModel;
  list: Object;

  constructor(private registrationService: RegistrationService,
              private notifier: NotificationService,
              private groups: GroupsService,
              private router: Router) {
    this.userRegistration = new UserModel();
  }

  ngOnInit() {
    this.groups.listGroups()
      .subscribe(result => this.list = result);
  }

  registration() {

    if (Object.keys(this.userRegistration).length === 6) {
      this.registrationService.registration(this.userRegistration)
        .subscribe(
          () => {
            const message = `Sikeres regisztrácio.`;
            this.notifier.display('success', message);
            this.router.navigate(['']);
          }, error => {
            const message = `A megadott adat hibás, vagy már használatban van.`;
            this.notifier.display('success', message);
            console.log(error);
          });
    }
  }
}
