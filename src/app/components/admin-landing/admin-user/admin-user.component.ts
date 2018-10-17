import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {AdminUserslistComponent} from '../admin-userslist/admin-userslist.component';
import {SidebarService} from '../../../services/sidebar.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  @Input() user: UserModel;
  isUnderEdit: Boolean;
  isLogListVisible: Boolean;

  constructor(private userService: UserService,
              private adminUserListComponent: AdminUserslistComponent,
              private sidebarService: SidebarService) { }

  ngOnInit() {
    this.isUnderEdit = false;
    this.isLogListVisible = false;
  }

  editUser() {
    this.isUnderEdit = this.isUnderEdit === false;
  }

  saveUser() {
    this.userService.editUser(this.user)
      .subscribe(() => {
        if (this.isUnderEdit === true) {
          this.isUnderEdit = false;
        }
        this.sidebarService.getNamesList();
      });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id)
      .subscribe(() => {
        this.adminUserListComponent.deleteUserById(this.user._id);
        this.sidebarService.getNamesList();
      });
  }

  showLogs() {
    this.isLogListVisible = this.isLogListVisible === false;
  }
}
