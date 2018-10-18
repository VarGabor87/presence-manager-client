import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { GroupModel } from '../../models/group.model';
import { AppStateService } from '../../app-state.service';
import { GroupsService } from '../../services/groups.service';
import {LandingComponent} from '../landing/landing.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: UserModel;
  listGroups: GroupModel[];
  groupName: String;
  lastCheckIn: String;

  constructor(private userService: UserService,
              private groupList: GroupsService,
              private appStateService: AppStateService,
              private landingComponent: LandingComponent) {
    this.userData = new UserModel();
    this.groupName = '';
    this.lastCheckIn = '';
  }

  ngOnInit() {
    this.extracted();
  }

  private extracted() {
    this.userService.userData().subscribe(value => {
      this.userData = value;
      this.lastCheckIn = `${this.userData.logs[this.userData.logs.length - 1].subjectDate}
       -- ${this.userData.logs[this.userData.logs.length - 1].lastCheckIn}`;
      this.groupList.listGroups().subscribe(data => {
        this.listGroups = data;
        for (let i = 0; i < this.listGroups.length; i++) {
          if (this.userData._group === this.listGroups[i]._id) {
            this.groupName = this.listGroups[i].name;
          }
        }
      });
    });
  }

  addCheckIn() {
    this.userService.manualCheckIn()
      .subscribe(() => {
        this.extracted();
        this.landingComponent.extracted();
      });
  }
}
