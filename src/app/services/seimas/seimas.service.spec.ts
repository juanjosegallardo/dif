import { TestBed } from '@angular/core/testing';

import { SeimasService } from './seimas.service';

describe('SeimasService', () => {
  let service: SeimasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeimasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
