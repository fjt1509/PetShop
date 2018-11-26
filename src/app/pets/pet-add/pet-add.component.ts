import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  owners: Owner[];

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl(),
    birthdate: new FormControl(Date),
   // previousOwner: new FormControl(Owner)
  })

  constructor(private petService: PetService, private ownerService: OwnerService, private  router: Router) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(listOfOwners => {this.owners = listOfOwners; });
  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet).subscribe(() => {this.router.navigateByUrl('/pets'); });
    console.log(pet);
  }
}
