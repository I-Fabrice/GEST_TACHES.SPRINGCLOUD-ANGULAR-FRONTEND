import { TestBed } from '@angular/core/testing';

import { Tache.ServicesService } from './tache.services.service';

describe('Tache.ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tache.ServicesService = TestBed.get(Tache.ServicesService);
    expect(service).toBeTruthy();
  });
});
