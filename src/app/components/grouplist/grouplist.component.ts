import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../../models/group.model';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  groupsList: GroupModel[];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.listGroups().subscribe((data) => {
      this.groupsList = data;
      console.log(this.groupsList);
    });
  }

}
