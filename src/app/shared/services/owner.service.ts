import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owners: Owner[];
  id = 1;
  apiUrl = 'https://petshop-easv-tubaek.azurewebsites.net/api/owners';
  constructor(private  http: HttpClient) {}

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>
    (this.apiUrl);
  }

  addOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + '/' + id);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.apiUrl + '/' + owner.id, owner);
  }

  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
