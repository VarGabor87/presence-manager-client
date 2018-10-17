import {Component, Input, OnInit} from '@angular/core';
import {LogsModel} from '../../../models/logs.model';
import {UserService} from '../../../services/user.service';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  @Input() log: LogsModel;
  @Input() user: UserModel;
  isUnderEdit: Boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isUnderEdit = false;
  }

  editLog() {
    this.isUnderEdit = this.isUnderEdit === false;
  }

  saveLog() {
    this.userService.editLogBySubjectDate(this.log, this.user.macAddress)
      .subscribe(data => {
        if (this.isUnderEdit === true) {
          this.isUnderEdit = false;
        }
      });
    // this.groupService.editGroup(this.group).subscribe(data => {
    //   if (this.isUnderEdit === true) {
    //     this.isUnderEdit = false;
    //   }
    // });


  }

  deleteLog() {

  }
}
