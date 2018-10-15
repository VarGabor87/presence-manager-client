import { Component, OnInit } from '@angular/core';
import { SidebarNamesService } from '../../services/sidebar-names.service';
import { UserModel } from '../../models/user.model';


@Component({
  selector: 'app-sidebar-names',
  templateUrl: './sidebar-names.component.html',
  styleUrls: ['./sidebar-names.component.css']
})
export class SidebarNamesComponent implements OnInit {
  namesList: UserModel[];


  constructor( private sidebarNamesService: SidebarNamesService ) { }

  ngOnInit() {
    this.sidebarNamesService.getActuals()
      .subscribe((data) => {
        this.namesList = data;
    });
  }

}
