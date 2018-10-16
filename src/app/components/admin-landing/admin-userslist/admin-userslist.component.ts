import {Component, OnInit, Input, DoCheck} from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-admin-userslist',
  templateUrl: './admin-userslist.component.html',
  styleUrls: ['./admin-userslist.component.css']
})
export class AdminUserslistComponent implements OnInit {
  @Input() userList: UserModel[];

  constructor() { }

  ngOnInit() {
  }

  public deleteUserById(id: String) {
    const index = this.userList.findIndex(userElement => userElement._id === id);
    this.userList.splice(index, 1);
  }

}
