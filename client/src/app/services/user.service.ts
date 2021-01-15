import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = `${apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/username/${username}`);
  }
}