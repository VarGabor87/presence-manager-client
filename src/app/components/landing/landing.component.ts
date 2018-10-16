import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import * as moment from 'moment';
import {LogsModel} from '../../models/logs.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userData: UserModel;
  dataSource: LogsModel[];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.userData()
      .subscribe(result => {
        this.userData = result;
        this.dataSource = this.userData.logs;
      });
  }

  accessLevelTester() {
    const accessLevel = sessionStorage.getItem('accessLevel');
    return accessLevel;
  }
}
