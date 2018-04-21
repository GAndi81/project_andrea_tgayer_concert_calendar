import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.pug',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService) { }

  ngOnInit() {
  }

  register(): void {
    this.authService.registerNewUser(this.user).subscribe({
      next: (user) => { console.log('next: ' + JSON.stringify(user)); },
      error: (err) => {
        console.log(err.status);
        console.log('err: ' + JSON.stringify(err));
      },
      complete: () => { console.log('complete'); }
    });
  }
}
