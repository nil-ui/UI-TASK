import { TestBed } from '@angular/core/testing';

import { SidebartoogleService } from './sidebartoogle.service';

describe('SidebartoogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebartoogleService = TestBed.get(SidebartoogleService);
    expect(service).toBeTruthy();
  });
});
