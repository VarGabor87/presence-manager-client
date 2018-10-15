import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {AppStateService} from '../../app-state.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor(private appStateService: AppStateService,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.appStateService.isLoggedIn();
  }
  accessLevelTester() {
    const accessLevel = sessionStorage.getItem('accessLevel');
    return accessLevel;
  }
}
