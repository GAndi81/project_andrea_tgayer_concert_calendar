import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  constructor(private httpClient: HttpClient, public authService: AuthService) { }

  ngOnInit() { }

  login(): void {
    this.authService.loginUser(this.user).subscribe({
      next: (data) => { console.log(); },
      error: (err) => {
        console.log(err.status);
        console.log('err: ' + JSON.stringify(err));
      },
      complete: () => { console.log('user logged in'); }
    });
  }
}
