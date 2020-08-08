import { TestBed } from '@angular/core/testing';

import { SubcategService } from './subcateg.service';

describe('SubcategService', () => {
  let service: SubcategService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
