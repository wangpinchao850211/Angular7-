import { TestBed } from '@angular/core/testing';

import { RemserviceService } from './remservice.service';

describe('RemserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemserviceService = TestBed.get(RemserviceService);
    expect(service).toBeTruthy();
  });
});
