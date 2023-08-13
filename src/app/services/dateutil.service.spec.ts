import { TestBed } from '@angular/core/testing';

import { DateutilService } from './dateutil.service';

describe('DateutilService', () => {
  let service: DateutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
