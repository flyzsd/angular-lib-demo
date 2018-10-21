import { TestBed, inject } from '@angular/core/testing';

import { ShudongService } from './shudong.service';

describe('ShudongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShudongService]
    });
  });

  it('should be created', inject([ShudongService], (service: ShudongService) => {
    expect(service).toBeTruthy();
  }));
});
