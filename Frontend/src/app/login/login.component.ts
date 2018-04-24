import { Component, OnInit } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';

  constructor(private httpClient: HttpClient, ) { }

  ngOnInit() {
    this.http.post<User[]>('http://localhost:3500/bakelits')
      .subscribe(bakelits => {
        this.title = bakelits[0].artist;
      });
  }
}
