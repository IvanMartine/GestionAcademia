import { TestBed } from '@angular/core/testing';

import { EstudiantesService } from './EstudiantesService';

describe('EstudiantesService', () => {
  let service: EstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
