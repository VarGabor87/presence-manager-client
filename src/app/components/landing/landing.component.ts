import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import * as moment from 'moment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userData: UserModel;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.userData()
      .subscribe(result => {
        this.userData = result;
        this.convertOnlyTime();
      });
  }

  convertOnlyTime () {
    for (let i = 0; i < this.userData.logs.length; i++) {
      // @ts-ignore
      this.userData.logs[i].firstCheckIn = moment(this.userData.logs[i].firstCheckIn, 'MMMM Do YYYY, h:mm:ss a').format('h:mm:ss a');
      // @ts-ignore
      this.userData.logs[i].lastCheckIn = moment(this.userData.logs[i].lastCheckIn, 'MMMM Do YYYY, h:mm:ss a').format('h:mm:ss a');
    }
  }

}
