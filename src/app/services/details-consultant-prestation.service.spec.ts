import { TestBed } from '@angular/core/testing';

import { DetailsConsultantPrestationService } from './details-consultant-prestation.service';

describe('DetailsConsultantPrestationService', () => {
  let service: DetailsConsultantPrestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsConsultantPrestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
