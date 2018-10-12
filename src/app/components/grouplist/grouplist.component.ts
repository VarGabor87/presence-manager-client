import { Component, OnInit, Input } from '@angular/core';
import { GroupModel } from '../../models/group.model';
import { GroupsService } from '../../services/groups.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  groupList: GroupModel[];
  @Input()
  namesList: UserModel[];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.listGroups().subscribe((data) => {
      this.groupList = data;
      console.log(this.groupList);
    });
  }

}
