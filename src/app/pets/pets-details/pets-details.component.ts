import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {

  pet: Pet;
  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit() {
    const id  = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id).subscribe(petFromRest => {this.pet = petFromRest; });
  }

}
