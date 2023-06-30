import { TestBed } from '@angular/core/testing';

import { GroupeServices.TsService } from './groupe-services.ts.service';

describe('GroupeServices.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupeServices.TsService = TestBed.get(GroupeServices.TsService);
    expect(service).toBeTruthy();
  });
});
