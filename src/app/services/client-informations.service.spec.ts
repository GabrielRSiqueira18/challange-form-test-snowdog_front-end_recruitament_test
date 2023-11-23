import { TestBed } from '@angular/core/testing';

import { ClientInformationsService } from './client-informations.service';

describe('ClientInformationsService', () => {
  let service: ClientInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
