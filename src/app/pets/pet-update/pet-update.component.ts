import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  id: number;

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl()
  })
  constructor(private route: ActivatedRoute, private router: Router, private petService: PetService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.petService.getPetById(this.id)
      .subscribe(petFromRest => {this.petForm.patchValue({
        name: petFromRest.name,
        type: petFromRest.type,
        color: petFromRest.color,
        price: petFromRest.price
      });
      });
  }


    save() {
      const pet = this.petForm.value;
      pet.id = this.id;
      this.petService.updatePet(pet);
      this.petForm.reset();
      this.router.navigateByUrl('/pets');

    }


}
