import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

const baseUrl = 'http://localhost:8080/api/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {}

   getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(pet: Pet): Observable<any> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const headerOptions = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${ username }:${ password }`)
    });

    console.log(pet);
    

    return this.http.post(baseUrl, pet, {
      headers: headerOptions
    });
  }
}
