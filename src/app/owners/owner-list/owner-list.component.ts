import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owner';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ownerService.getOwners().subscribe(listOfOwners => {this.owners = listOfOwners; });
  }

  deleteOwner(id: number) {
    this.ownerService.deleteOwner(id).subscribe(message => {
      console.log('Deleted Owner' + message);
      this.refresh();
    });
  }

}
