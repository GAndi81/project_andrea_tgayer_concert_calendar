import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-concert-calendar',
  templateUrl: './concert-calendar.component.pug',
  styleUrls: ['./concert-calendar.component.css']
})
export class ConcertCalendarComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Calendar[]>('http://localhost:3500/concerts')
      .subscribe(concerts => {
        this.title = concerts[0].artist;
      });

  }
}

class Calendar {
  artist: string;
}
