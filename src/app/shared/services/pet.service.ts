import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[];
  id = 1;
  constructor() {
    this.pets = [
    {id: this.id++, name: 'Miser', type: 'Cat', color: 'Blue', price: 2005},
    {id: this.id++, name: 'Vuffer', type: 'Dog', color: 'Red', price: 15000}]; }

  getPets(): Pet[] {
    return this.pets;
  }

  addPet(pet: Pet) {
    // Call Pet REST-API
    pet.id = this.id++;
    this.pets.push(pet);
  }

  getPetById(id: number) {
    return this.pets.find(pet => pet.id === id);
  }

  updatePet(pet: Pet) {
    const petToUpdate = this.pets.find(findPet => findPet.id === pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

}

