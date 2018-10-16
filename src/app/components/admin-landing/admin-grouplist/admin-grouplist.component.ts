import { Component, OnInit, Input } from '@angular/core';
import { GroupsService } from '../../../services/groups.service';
import { GroupModel } from '../../../models/group.model';
import { UserModel } from '../../../models/user.model';
import { UserupdateService } from '../../../services/userupdate.service';

@Component({
  selector: 'app-admin-grouplist',
  templateUrl: './admin-grouplist.component.html',
  styleUrls: ['./admin-grouplist.component.css']
})
export class AdminGrouplistComponent implements OnInit {
  groupList: GroupModel[];
  userList: UserModel[];
  usersByGroupList: any[] = [];

  constructor(private groupsService: GroupsService,
              private userUpdateService: UserupdateService) { }

  ngOnInit() {
    this.groupsService.listGroups().subscribe((data) => {
      this.groupList = data;
      this.userUpdateService.readAllUsers().subscribe((data2) => {
        this.userList = data2;
        for (let i = 0; i < this.groupList.length; i++) {
          this.usersByGroupList.push(this.selectUsersByGroup(this.groupList[i]._id));
        }
      });
    });

  }

  selectUsersByGroup(groupId: String) {
    const selectedUsers: UserModel[] = [];

   for (let i = 0 ; i < this.userList.length; i++) {
    if (this.userList[i]._group === groupId) {
      selectedUsers.push(this.userList[i]);
    }
   }
   return selectedUsers;

  }

  public deleteGroupByID(id: String) {
    const index = this.groupList.findIndex(groupElement => groupElement._id === id);
    this.groupList.splice(index, 1);
}

}
