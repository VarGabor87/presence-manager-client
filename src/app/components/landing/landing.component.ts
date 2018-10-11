import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userData: Object;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.userData()
      .subscribe(result => this.userData = result);
  }

}
