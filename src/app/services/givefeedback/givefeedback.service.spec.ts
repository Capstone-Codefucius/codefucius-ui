import { TestBed } from '@angular/core/testing';

import { GivefeedbackService } from './givefeedback.service';

describe('GivefeedbackService', () => {
  let service: GivefeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GivefeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
