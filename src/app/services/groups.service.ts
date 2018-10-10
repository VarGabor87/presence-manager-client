import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  listGroups() {
    return this.http.get('http://localhost:3000/groups/');
  }
}
