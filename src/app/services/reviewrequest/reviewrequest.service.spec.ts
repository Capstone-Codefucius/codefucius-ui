import { TestBed } from '@angular/core/testing';

import { ReviewrequestService } from './reviewrequest.service';

describe('ReviewrequestService', () => {
  let service: ReviewrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
