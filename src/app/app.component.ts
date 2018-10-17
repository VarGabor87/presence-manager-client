import {Component, DoCheck, OnInit} from '@angular/core';
import {AppStateService} from './app-state.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  constructor (private appStateService: AppStateService, private router: Router) {
  }

  ngDoCheck(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.appStateService.isLoggedIn();
      }
    });
  }

  ngOnInit(): void {
  }
}
