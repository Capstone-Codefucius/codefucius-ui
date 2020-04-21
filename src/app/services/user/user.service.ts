import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../services/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'http://localhost:5000/api';  //make sure uncommented for GitHub
  //public API = 'https://localhost:44363/api'; 

  public CODEFUCIUS_API = `${this.API}/user`;
  filter: string;
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.CODEFUCIUS_API);

  }

  get(id: string) {
    return this.http.get(`${this.CODEFUCIUS_API}/${id}`);
  }

  save(user: User): Observable<User> {
    let result: Observable<User>;
    if (user.ID) {
      result = this.http.put<User>(
        `${this.CODEFUCIUS_API}/${user.ID}`,
        user
      );
    } else {
      result = this.http.post<User>(this.CODEFUCIUS_API, user); 
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.CODEFUCIUS_API}/${id.toString()}`);
  }
  
}
