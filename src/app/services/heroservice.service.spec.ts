import { TestBed } from '@angular/core/testing';

import { HeroserviceService } from './heroservice.service';

describe('HeroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroserviceService = TestBed.get(HeroserviceService);
    expect(service).toBeTruthy();
  });
});
