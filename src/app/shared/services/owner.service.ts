import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../models/owner';
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
export class OwnerService {
  owners: Owner[];
  id = 1;
  apiUrl = 'https://petshop-easv-tubaek.azurewebsites.net/api/owners';
  constructor(private  http: HttpClient, private authenticationService: AuthenticationService) {}

  getOwners(): Observable<Owner[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner[]>(this.apiUrl, httpOptions);
  }

  addOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Owner>(this.apiUrl, owner, httpOptions);
  }

  getOwnerById(id: number): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner>(this.apiUrl + '/' + id, httpOptions);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Owner>(this.apiUrl + '/' + owner.id, owner, httpOptions);
  }

  deleteOwner(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
