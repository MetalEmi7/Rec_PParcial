import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MiHttpServiceService {

  constructor(public http:Http) { }

  public httpSelect()  {
    let url = "http://localhost:8080/slim/apirest/vehiculos/";

    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error;
  }

}
