import { Component, OnInit, Input } from '@angular/core';
import { GroupModel } from '../../models/group.model';
import { GroupsService } from '../../services/groups.service';
import { UserModel } from '../../models/user.model';
import {SidebarService} from '../../services/sidebar.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  groupList: GroupModel[];
  @Input() namesList: UserModel[];

  constructor(private groupsService: GroupsService,
              private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.getGroupList();
    this.sidebarService.groupList
      .subscribe(data => {
        this.groupList = data;
      });
  }

  deleteGroupById(id: String) {
    const index = this.groupList.findIndex(groupElement => groupElement._id === id);
    this.groupList.splice(index, 1);
  }

  editGroupById(group: GroupModel) {
    const index = this.groupList.findIndex(groupElement => groupElement._id === group._id);
    this.groupList[index] = group;
  }

}
