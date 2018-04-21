import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3500/users';

@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient) { }

  registerNewUser(user: User): Observable<User> {
    console.log('registerNewUser:' + user);
    return this.httpClient.post<User>(URL, user);
  }

}
