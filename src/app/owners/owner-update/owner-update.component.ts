import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../shared/services/pet.service';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {

  id: number;

  ownerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.ownerService.getOwnerById(this.id)
      .subscribe(ownerFromRest => {this.ownerForm.patchValue({
        firstName: ownerFromRest.firstName,
        lastName: ownerFromRest.lastName,
        address: ownerFromRest.address,
        phoneNumber: ownerFromRest.phoneNumber,
        email: ownerFromRest.email
      });
      });
  }


  save() {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner).subscribe(ownerUpdtead => {this.router.navigateByUrl('/owners'); });
  }

}
