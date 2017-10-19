import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MiHttpServiceService } from "../servicios/mi-http-service.service";

@Injectable()
export class ServicioVehiculosService {
  constructor(public http:MiHttpServiceService) { }
  ListaObtenida:Array<any>;

  public select(){    
      return this.ObtenerDatos();
  }

  public ObtenerDatos()
  {
    return this.http.httpSelect()
    .then(data=> data)
    .catch(error=> error )
  }


  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }
}
