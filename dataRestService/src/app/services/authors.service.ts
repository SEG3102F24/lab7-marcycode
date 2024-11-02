import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private baseUrl = 'http://localhost:8080/books-api/authors'; 

  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;  
    return this.http.get(url);
  }
}
