import { TestBed } from '@angular/core/testing';

import { GetAtaaRecordsServiceService } from './get-ataa-records-service.service';

describe('GetAtaaRecordsServiceService', () => {
  let service: GetAtaaRecordsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAtaaRecordsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
