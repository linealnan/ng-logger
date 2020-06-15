import { TestBed } from '@angular/core/testing';

import { NgLoggerService } from './ng-logger.service';

describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLoggerService = TestBed.get(NgLoggerService);
    expect(service).toBeTruthy();
  });
});
