import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserupdateService } from '../../services/userupdate.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  isPasswordsMatch: Boolean;
  userData: UserModel;
  userUpdateData: UserModel;

  constructor(
    private router: Router,
    private notifier: NotificationService,
    private userupdateService: UserupdateService) {
    this.userData = new UserModel();
    this.userUpdateData = new UserModel();
  }

  ngOnInit() {
    this.userupdateService.isPasswordsMatch.subscribe(value => this.isPasswordsMatch = value);
    this.userupdateService.getUserInfo().subscribe(value => {
    this.userData = value;
    });

  }

  update() {
    if (this.userUpdateData.password !== this.userUpdateData.repeatPassword) {
      this.userupdateService.isPasswordsMatch.next(false);
    }

    if (Object.keys(this.userUpdateData).length > 0 && this.isPasswordsMatch) {
      this.userupdateService.update(this.userUpdateData)
        .subscribe(
          (response) => {
            sessionStorage.setItem('is_generated_pw', 'false');
            const message = `Jelszavadat sikeresen megváltoztattad.`;
            this.notifier.display('success', message);
            this.router.navigate(['/']);
          },
          error => {
            if (error === 'Bad Request') {
            const message = `Jelszavadat megváltoztatása közben hiba történt!`;
            this.notifier.display('error', message);

            }
          }
        );
    }
  }
}
