import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertCalendarComponent } from './concert-calendar.component';

describe('ConcertCalendarComponent', () => {
  let component: ConcertCalendarComponent;
  let fixture: ComponentFixture<ConcertCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
