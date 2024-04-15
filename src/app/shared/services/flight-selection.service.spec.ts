import { TestBed } from '@angular/core/testing';

import { FlightSelectionService } from './flight-selection.service';

describe('FlightSelectionService', () => {
  let service: FlightSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
