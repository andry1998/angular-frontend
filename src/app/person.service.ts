import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'http://backendspringboot.eba-zan62pvf.eu-central-1.elasticbeanstalk.com/persons';

  constructor(private http: HttpClient) { }

  getPersonList(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:ban-types
  createPerson(person: Person): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, person);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  updatePerson(id: number, person: Person): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, person);
  }

  // tslint:disable-next-line:ban-types
  deletePerson(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
