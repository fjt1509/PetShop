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
  constructor(private  http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>
    (this.apiUrl);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + id);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.apiUrl + '/' + pet.id, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}

