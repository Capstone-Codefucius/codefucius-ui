import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../services/review/review';

@Injectable({
  providedIn: 'root'
})


export class HelpWantedService {
  public API = 'http://localhost:5000/api';  //make sure uncommented for GitHub
  //public API = 'https://localhost:44363/api'; //for Kristi's env local only

  public CODEFUCIUS_API = `${this.API}/reviews`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Review[]> {
    return this.http.get<Review[]>(this.CODEFUCIUS_API); //get status
  }

  save(review: Review): Observable<Review> {
    let result: Observable<Review>;
    if (review.ID) {
      result = this.http.put<Review>(
        `${this.CODEFUCIUS_API}/${review.status}`,
        review
      );
    } else {
      result = this.http.post<Review>(this.CODEFUCIUS_API, review);
    }
    return result;
  }
}
