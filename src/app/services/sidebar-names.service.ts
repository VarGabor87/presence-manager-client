import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarNamesService {

  constructor(private httpClient: HttpClient) { }

  getActuals(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users/list/actuals');
  }
}
