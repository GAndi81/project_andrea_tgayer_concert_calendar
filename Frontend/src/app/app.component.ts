import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Bakelit } from './bakelit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Bakelit[]>('http://localhost:3500/bakelits')
      .subscribe(bakelits => {
        this.title = bakelits[0].artist;
      });
  }
}

