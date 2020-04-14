//tutorial https://atom-morgan.github.io/how-to-mock-an-api-in-angular/
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../../services/review/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  public API = 'http://localhost:5000/api';  //make sure uncommented for GitHub
  //public API = 'https://localhost:44363/api'; //for Kristi's env local only

  public CODEFUCIUS_API = `${this.API}/reviews`;
  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(`${this.CODEFUCIUS_API}/${id}`);
  }
  getAll(): Observable<Review[]> {
    return this.http.get<Review[]>(this.CODEFUCIUS_API);
  }

  save(review: Review): Observable<Review> {
    let result: Observable<Review>;
    if (review.ID) {
      result = this.http.put<Review>(
        `${this.CODEFUCIUS_API}/${review.ID}`,
        review
      );
    } else {
      result = this.http.post<Review>(this.CODEFUCIUS_API, review);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.CODEFUCIUS_API}/${id.toString()}`);
  }

}
