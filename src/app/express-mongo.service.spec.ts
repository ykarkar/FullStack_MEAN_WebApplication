import { TestBed } from '@angular/core/testing';

import { ExpressMongoService } from './express-mongo.service';

describe('ExpressMongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpressMongoService = TestBed.get(ExpressMongoService);
    expect(service).toBeTruthy();
  });
});
