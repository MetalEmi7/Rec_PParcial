import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { RouterModule, Routes, RouterLinkActive } from "@angular/router";
import { HttpModule } from "@angular/http";     


import { AppComponent } from './app.component';


import { AltaComponent } from './alta/alta.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BajaComponent } from './baja/baja.component';
import { ErrorComponent } from './error/error.component';
import { ListaComponent } from './lista/lista.component';   

import { PersonaService } from "./servicios/persona.service";
import { HttpService } from "./servicios/http.service";
import { MostrarPersonaComponent } from './mostrar-persona/mostrar-persona.component';



import { ListadoVehiculosComponent } from './listado-vehiculos/listado-vehiculos.component';
import { ServicioVehiculosService } from "./servicios/servicio-vehiculos.service";
import { MiHttpServiceService } from "./servicios/mi-http-service.service";


const miRoute=[
  //{path: "login",component: LoginComponent},  
  {path: "menu",component: ListadoVehiculosComponent},
    /*children:[
      //{path: "alta", component: AltaComponent},
      //{path: "baja", component: BajaComponent},
      {path: "listado", component: ListaComponent,
        children:[
          {path: "alta", component: AltaComponent}
        ]}
    ]},*/
  {path: "",component: ListadoVehiculosComponent},
  {path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    LoginComponent,
    MainMenuComponent,
    BajaComponent,
    ErrorComponent,
    ListaComponent,
    MostrarPersonaComponent,
    ListadoVehiculosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRoute),        
    HttpModule                            
  ],
  providers: [
    PersonaService,
    HttpService,
    ServicioVehiculosService,
    MiHttpServiceService                           
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
