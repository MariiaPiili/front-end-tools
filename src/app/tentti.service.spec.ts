import { TestBed } from '@angular/core/testing';

import { TenttiService } from './tentti.service';

describe('TenttiService', () => {
  let service: TenttiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenttiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
