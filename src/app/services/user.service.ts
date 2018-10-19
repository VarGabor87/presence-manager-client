import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {LogsModel} from '../models/logs.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userData(): Observable<any> {
    return this.http.get('http://localhost:3000/users/me');
  }

  getUserById(id: String): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  editUser(user: UserModel) {
    return this.http.patch(`http://localhost:3000/users/`, user);
  }

  deleteUser(id: String) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  editLogBySubjectDate(log: LogsModel, macAddress: String) {
    const body = {
        macAddress: macAddress,
        subjectDate: log.subjectDate,
        firstCheckIn: log.firstCheckIn,
        lastCheckIn: log.lastCheckIn
      };
    return this.http.patch('http://localhost:3000/users/presence/edit',
      body);
  }

  manualCheckIn() {
    return this.http.get('http://localhost:3000/users/presence/manual');
  }
}
