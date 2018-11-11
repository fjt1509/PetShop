import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'ny-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[];
  id = 1;
  apiUrl = 'https://petshop-easv-tubaek.azurewebsites.net/api/pets';
  constructor(private  http: HttpClient, private authenticationService: AuthenticationService) {}

  getPets(): Observable<Pet[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet[]>(this.apiUrl, httpOptions);
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

