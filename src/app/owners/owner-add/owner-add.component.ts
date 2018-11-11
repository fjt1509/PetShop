import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private ownerService: OwnerService, private  router: Router) { }

  ngOnInit() {
  }

  save() {
    const owner = this.ownerForm.value;
    this.ownerService.addOwner(owner).subscribe(() => {this.router.navigateByUrl('/owners'); });
  }
}

