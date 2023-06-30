import { TestBed } from '@angular/core/testing';

import { ProjetCompteServices.TsService } from './projet-compte-services.ts.service';

describe('ProjetCompteServices.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetCompteServices.TsService = TestBed.get(ProjetCompteServices.TsService);
    expect(service).toBeTruthy();
  });
});
