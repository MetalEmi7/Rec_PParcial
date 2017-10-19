import { Component, OnInit } from '@angular/core';
import { ServicioVehiculosService } from "../servicios/servicio-vehiculos.service";

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {
  
   miservicio:ServicioVehiculosService;

  constructor(private servicio:ServicioVehiculosService)
  {
    this.listar();
  }
  
  ListaDeVehiculos:Array<any> = [];
  
    form={
      id:"",
      modelo:"",
      tipo:"",
      anio:"",
      foto:""
    }

    listar()
    {
      this.servicio.ObtenerDatos()
      .then( data => {
        this.ListaDeVehiculos = data;
        console.log(data);
      })
    }











  ngOnInit() {
  }

}
