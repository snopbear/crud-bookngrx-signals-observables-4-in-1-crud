/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookObservablesService } from './book-observables.service';

describe('Service: BookObservables', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookObservablesService]
    });
  });

  it('should ...', inject([BookObservablesService], (service: BookObservablesService) => {
    expect(service).toBeTruthy();
  }));
});
