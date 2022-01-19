import { TestBed } from '@angular/core/testing';

import { ConectorJsonService } from './conector-json.service';

describe('ConectorJsonService', () => {
  let service: ConectorJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectorJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
