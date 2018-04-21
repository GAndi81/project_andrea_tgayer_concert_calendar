import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Bakelit } from '../bakelit';
import { BakelitService } from '../bakelit.service';

@Component({
  selector: 'app-bakelit',
  templateUrl: './bakelit.component.pug',
  styleUrls: ['./bakelit.component.css']
})
export class BakelitComponent implements OnInit {

  bakelits: Bakelit[];


  constructor(
    private http: HttpClient,
    private bakelitService: BakelitService) { }

  ngOnInit() {
    this.bakelitService.getBakelits().subscribe(bakelits => {
      this.bakelits = bakelits;
    });

  }
}
