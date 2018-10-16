import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {AdminUserslistComponent} from '../admin-userslist/admin-userslist.component';

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
              private adminUserListComponent: AdminUserslistComponent ) { }

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
      });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id)
      .subscribe(() => {
        this.adminUserListComponent.deleteUserById(this.user._id);
      });
  }

  showLogs() {
    this.isLogListVisible = this.isLogListVisible === false;
  }
}
