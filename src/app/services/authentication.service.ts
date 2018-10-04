import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppStateService} from '../app-state.service';
import * as moment from 'moment';
import {UserModel} from '../models/user.model';
import {tap} from 'rxjs/operators';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private appStateService: AppStateService) { }

  login(loginData: UserModel) {
    return this.http.post('http://localhost:3000/users/login', loginData)
      .pipe(tap(authResult => this.setSession(authResult)));
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    sessionStorage.setItem('id_token', authResult.idToken);
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    sessionStorage.setItem('accessLevel', authResult.accessLevel);
  }

  logout() {
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    sessionStorage.removeItem('accessLevel');
  }
}
