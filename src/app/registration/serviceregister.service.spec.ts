import { TestBed, inject } from '@angular/core/testing';

import { ServiceregisterService } from './serviceregister.service';

describe('ServiceregisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceregisterService]
    });
  });

  it('should be created', inject([ServiceregisterService], (service: ServiceregisterService) => {
    expect(service).toBeTruthy();
  }));
});
