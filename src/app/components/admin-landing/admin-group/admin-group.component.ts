import {Component, Input, OnInit} from '@angular/core';
import {GroupModel} from '../../../models/group.model';
import {UserModel} from '../../../models/user.model';
import {GrouplistComponent} from '../../grouplist/grouplist.component';
import {AdminGrouplistComponent} from '../admin-grouplist/admin-grouplist.component';
import {GroupsService} from '../../../services/groups.service';
import {SidebarService} from '../../../services/sidebar.service';

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.css']
})
export class AdminGroupComponent implements OnInit {
  @Input() group: GroupModel;
  @Input() userList: UserModel[];
  showUserList: Boolean;
  isUnderEdit: Boolean;

  constructor(private adminGroupListComponent: AdminGrouplistComponent,
              private groupService: GroupsService,
              private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.showUserList = false;
    this.isUnderEdit = false;
  }

  showGroup() {
    this.showUserList = this.showUserList === false;
  }

  deleteGroup() {
    this.groupService.deleteGroup(this.group._id)
      .subscribe( () => {
        this.adminGroupListComponent.deleteGroupByID(this.group._id);
        this.sidebarService.getGroupList();
      });
  }

  editGroup() {
    this.isUnderEdit = this.isUnderEdit === false;
  }

  saveGroup() {
    this.groupService.editGroup(this.group).subscribe(data => {
      if (this.isUnderEdit === true) {
        this.isUnderEdit = false;
      }
      this.sidebarService.getGroupList();
    });
  }
}
