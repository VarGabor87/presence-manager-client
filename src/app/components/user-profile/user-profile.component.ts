import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { LogsModel } from '../../models/logs.model';
import { GroupModel } from '../../models/group.model';
import { AppStateService } from '../../app-state.service';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: UserModel;
  listGroups: GroupModel[];

  constructor(private userService: UserService,
    private groupList: GroupsService,
    private appStateService: AppStateService) {
    this.userData = new UserModel();

  }

  ngOnInit() {
    this.userService.userData().subscribe(value => {
      this.userData = value;
      console.log(value);
    });

  }

}
