import { TestBed } from '@angular/core/testing';

import { MycalcService } from './mycalc.service';

describe('MycalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycalcService = TestBed.get(MycalcService);
    expect(service).toBeTruthy();
  });
});
