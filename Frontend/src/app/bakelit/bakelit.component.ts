import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Bakelit } from '../bakelit';
import { User } from '../user';
import { BakelitService } from '../bakelit.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bakelit',
  templateUrl: './bakelit.component.pug',
  styleUrls: ['./bakelit.component.css']
})
export class BakelitComponent implements OnInit {

  bakelits: Bakelit[];


  constructor(
    private http: HttpClient,
    private bakelitService: BakelitService,
    private authService: AuthService) { }

  ngOnInit() {
    this.bakelitService.getBakelits().subscribe(bakelits => {
      this.bakelits = bakelits;
    });
  }
}
