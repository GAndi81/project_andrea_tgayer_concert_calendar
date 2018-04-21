import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakelitComponent } from './bakelit.component';

describe('ConcertCalendarComponent', () => {
  let component: BakelitComponent;
  let fixture: ComponentFixture<BakelitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakelitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakelitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
