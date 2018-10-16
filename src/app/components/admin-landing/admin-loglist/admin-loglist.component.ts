import {Component, Input, OnInit} from '@angular/core';
import {LogsModel} from '../../../models/logs.model';
import {UserModel} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-admin-loglist',
  templateUrl: './admin-loglist.component.html',
  styleUrls: ['./admin-loglist.component.css']
})
export class AdminLoglistComponent implements OnInit {
  logList: LogsModel[];
  @Input() user: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(this.user._id)
      .subscribe(data => {
        this.user = data;
        this.logList = this.user.logs;
      });
  }

}
