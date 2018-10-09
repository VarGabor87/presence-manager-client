import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarNamesService {

  constructor(private httpClient: HttpClient) { }

  getActuals() {
    //return this.httpClient.get('http://localhost:3000/users/list/actuals');
  }
}
