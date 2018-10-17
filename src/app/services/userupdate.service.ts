import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserupdateService {

  public isPasswordsMatch: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private httpClient: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users/me');
  }

  update(updatedUser: UserModel) {
    return this.httpClient.patch('http://localhost:3000/users/newpassword', updatedUser);
  }

  readAllUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users/list/all');
  }
}
