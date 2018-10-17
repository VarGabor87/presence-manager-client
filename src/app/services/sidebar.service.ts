import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';
import {SidebarNamesService} from './sidebar-names.service';
import {GroupsService} from './groups.service';
import {GroupModel} from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public namesList: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>(null);
  public groupList: BehaviorSubject<GroupModel[]> = new BehaviorSubject<GroupModel[]>(null);

  constructor(private sidebarNamesService: SidebarNamesService,
              private groupsService: GroupsService) {
  }

  getNamesList() {
    this.sidebarNamesService.getActuals()
      .subscribe((data) => {
        this.namesList.next(data);
      });
  }

  getGroupList() {
    this.groupsService.listGroups()
      .subscribe((data) => {
      this.groupList.next(data);
    });
  }
}
