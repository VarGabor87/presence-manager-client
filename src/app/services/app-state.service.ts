import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public isLoggedIn() {
    if (moment().isBefore(this.getExpiration())) {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
