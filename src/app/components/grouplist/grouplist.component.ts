import { Component, OnInit, Input } from '@angular/core';
import { GroupModel } from '../../models/group.model';
import { GroupsService } from '../../services/groups.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  groupList: GroupModel[];
  @Input() namesList: UserModel[];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
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
