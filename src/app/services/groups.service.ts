import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GroupModel} from '../models/group.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  listGroups(): Observable<any> {
    return this.http.get('http://localhost:3000/groups/');
  }

  createGroup(createData: GroupModel) {
    return this.http.post('http://localhost:3000/groups/', createData);
  }

  deleteGroup(id: String) {
    return this.http.delete(`http://localhost:3000/groups/${id}`);
  }

  editGroup(group: GroupModel) {
    return this.http.patch('http://localhost:3000/groups/', group);
  }
}
