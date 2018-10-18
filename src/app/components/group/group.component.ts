import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../../models/group.model';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { GroupsService } from '../../services/groups.service';
import {SidebarService} from '../../services/sidebar.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: GroupModel;
  groupRegistration: GroupModel;

  constructor(private notifier: NotificationService,
              private groups: GroupsService,
              private router: Router,
              private sidebarService: SidebarService,
  ) {
    this.groupRegistration = new GroupModel();
  }

  ngOnInit() {
  }

  addGroup() {
    if (Object.keys(this.groupRegistration).length === 1) {
      this.groups.createGroup(this.groupRegistration)
        .subscribe(
          () => {
            const message = `Létrehoztál egy új csoportot`;
            this.notifier.display('success', message);
            this.router.navigate(['']);
            this.sidebarService.getGroupList();
          }, error => {
            const message = `A csoport készítése közben hiba történt`;
            this.notifier.display('success', message);
            console.log(error);
          });
    }

  }

}
