import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { config } from 'config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}

  saveUser(user: User): Observable<User> {
    return this.client.post<User>(config.USER_URL, user);
  }

  login(user: User): Observable<User> {
    return this.client.post<User>(`${config.USER_URL}/generateToken`, user);
  }
}
