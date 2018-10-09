import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../interfaces/country';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(query): Observable<any> {
    return this.http.get('http://localhost:3000/country');
  }
}
