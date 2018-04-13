import { TestBed, inject } from '@angular/core/testing';

import { OverallPortDataService } from './overall-port-data.service';

describe('OverallPortDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverallPortDataService]
    });
  });

  it('should be created', inject([OverallPortDataService], (service: OverallPortDataService) => {
    expect(service).toBeTruthy();
  }));
});
