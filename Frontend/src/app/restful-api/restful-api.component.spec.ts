import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulApiComponent } from './restful-api.component';

describe('RestfulApiComponent', () => {
  let component: RestfulApiComponent;
  let fixture: ComponentFixture<RestfulApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfulApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfulApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
