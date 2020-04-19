import { TestBed } from '@angular/core/testing';

import { HelpWantedService } from './help-wanted.service';

describe('HelpWantedService', () => {
  let service: HelpWantedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpWantedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
