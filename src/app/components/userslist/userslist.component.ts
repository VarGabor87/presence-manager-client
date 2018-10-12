import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { UserupdateService } from '../../services/userupdate.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userList: UserModel[];

  constructor(private userUpdateService: UserupdateService) { }

  ngOnInit() {
    this.userUpdateService.readAllUsers().subscribe((data) => {
      this.userList = data;
      console.log(this.userList);
    });
  }

}
