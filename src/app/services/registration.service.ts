import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registration(registrationData: UserModel) {
    return this.http.post('http://localhost:3000/users/', registrationData);
  }
}
