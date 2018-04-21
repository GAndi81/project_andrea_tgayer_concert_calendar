import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bakelit } from './bakelit';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BakelitService {

  private url = 'http://localhost:3500/bakelits';

  constructor(private httpClient: HttpClient) {}

  getBakelits(): Observable<Bakelit[]> {
    return this.httpClient.get<Bakelit[]>(this.url);
  }

}
