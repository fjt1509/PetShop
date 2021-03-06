import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetService} from '../../shared/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.petService.getPets().subscribe(listOfPets => {this.pets = listOfPets; });
  }

  deletePet(id: number) {
    this.petService.deletePet(id).subscribe(message => {console.log('Deleted Pet' + message);
      this.refresh();
    });
  }



}
