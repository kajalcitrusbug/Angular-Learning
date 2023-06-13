import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class StudentsDataService {
  url: string = 'https://randomuser.me/api/?results=10';
  constructor(private http: HttpClient) {}
  students() {
    this.http.get(this.url);
  }
}
