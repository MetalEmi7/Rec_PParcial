import { TestBed, inject } from '@angular/core/testing';

import { ServicioVehiculosService } from './servicio-vehiculos.service';

describe('ServicioVehiculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioVehiculosService]
    });
  });

  it('should be created', inject([ServicioVehiculosService], (service: ServicioVehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
