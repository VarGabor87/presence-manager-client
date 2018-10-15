import { Component, OnInit, Input } from '@angular/core';
import { UserupdateService } from '../../../services/userupdate.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-admin-userslist',
  templateUrl: './admin-userslist.component.html',
  styleUrls: ['./admin-userslist.component.css']
})
export class AdminUserslistComponent implements OnInit {
  @Input() userList: UserModel;

  constructor(private userUpdateService: UserupdateService) { }

  ngOnInit() {
  }

}
