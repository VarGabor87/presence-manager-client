import {Component, Input, OnInit} from '@angular/core';
import {LogsModel} from '../../../models/logs.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  @Input() log: LogsModel;
  isUnderEdit: Boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isUnderEdit = false;
  }

  editLog() {
    this.isUnderEdit = this.isUnderEdit === false;
  }

  saveLog() {
    console.log(JSON.stringify(this.log, undefined, 2));
    this.userService.editLogBySubjectDate(this.log)
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
