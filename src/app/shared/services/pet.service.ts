import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[];
  id = 1;
  apiUrl = 'https://petshop-easv-tubaek.azurewebsites.net/api/pets';
  constructor(private  http: HttpClient) {
    this.pets = [
    {id: this.id++, name: 'Miser', type: 'Cat', color: 'Blue', price: 2005},
    {id: this.id++, name: 'Vuffer', type: 'Dog', color: 'Red', price: 15000}]; }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>
    (this.apiUrl);
  }

  addPet(pet: Pet) {
    // Call Pet REST-API
    pet.id = this.id++;
    this.pets.push(pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + id);
  }

  updatePet(pet: Pet) {
    const petToUpdate = this.pets.find(findPet => findPet.id === pet.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}

