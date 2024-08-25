/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookSignalsService } from './book-signals.service';

describe('Service: BookSignals', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookSignalsService]
    });
  });

  it('should ...', inject([BookSignalsService], (service: BookSignalsService) => {
    expect(service).toBeTruthy();
  }));
});
