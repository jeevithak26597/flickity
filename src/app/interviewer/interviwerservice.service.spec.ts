import { TestBed, inject } from '@angular/core/testing';

import { InterviwerserviceService } from './interviwerservice.service';

describe('InterviwerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviwerserviceService]
    });
  });

  it('should be created', inject([InterviwerserviceService], (service: InterviwerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
