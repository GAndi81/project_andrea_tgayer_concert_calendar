import { TestBed, inject } from '@angular/core/testing';

import { BakelitService } from './bakelit.service';

describe('BakelitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BakelitService]
    });
  });

  it('should be created', inject([BakelitService], (service: BakelitService) => {
    expect(service).toBeTruthy();
  }));
});
