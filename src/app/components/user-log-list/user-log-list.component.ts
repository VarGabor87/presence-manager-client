import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {LogsModel} from '../../models/logs.model';
import {UserService} from '../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-log-list',
  templateUrl: './user-log-list.component.html',
  styleUrls: ['./user-log-list.component.css']
})
export class UserLogListComponent implements OnInit {
  displayedColumns = [ 'subjectDate', 'firstCheckIn', 'lastCheckIn'];
  @Input() dataSource: LogsModel[];

  constructor() { }

  ngOnInit() {
  }

}
