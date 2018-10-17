import { Component, OnInit } from '@angular/core';
import { SidebarNamesService } from '../../services/sidebar-names.service';
import { UserModel } from '../../models/user.model';
import {SidebarService} from '../../services/sidebar.service';


@Component({
  selector: 'app-sidebar-names',
  templateUrl: './sidebar-names.component.html',
  styleUrls: ['./sidebar-names.component.css']
})
export class SidebarNamesComponent implements OnInit {
  namesList: UserModel[];

  constructor( private sidebarService: SidebarService ) { }

  ngOnInit() {
    this.sidebarService.namesList
      .subscribe(data => {
        this.namesList = data;
      });
  }
  accessLevelTester() {
    const accessLevel = sessionStorage.getItem('accessLevel');
    return accessLevel;
  }

}
