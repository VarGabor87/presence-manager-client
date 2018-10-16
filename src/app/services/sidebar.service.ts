import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';
import {SidebarNamesService} from './sidebar-names.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public namesList: BehaviorSubject<UserModel[]>;

  constructor(private sidebarNamesService: SidebarNamesService) {
    this.getNamesList();
  }

  getNamesList() {
    this.sidebarNamesService.getActuals()
      .subscribe((data) => {
        this.namesList = new BehaviorSubject<UserModel[]>(data);
      });
  }

  getGroupList() {
    this.groupsService.listGroups().subscribe((data) => {
      this.groupList = data;
    });
  }
}
