import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';

const URL = 'http://localhost:3500/users';
const URLlogin = 'http://localhost:3500/users/5addaf70a1e9ee3388cd3bb6';

@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient) { }

  if

  registerNewUser(user: User): Observable<User> {
    console.log('registerNewUser:' + user);
    return this.httpClient.post<User>(URL, user);
  }

  loginUser(user: User): Observable<User> {
    console.log('loginUser:' + user);
    return this.httpClient.post<User>(URLlogin, user);
  }

}
