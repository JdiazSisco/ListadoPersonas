import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  //Guardar Personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient.post('https://listado-personas-9f599.firebaseio.com/datos.json',personas)
    .subscribe(
        response =>{
            console.log("Resultado de guardar: " + response);
        },
        error => {
            console.log("Error al guardar: " + error);
        }
    );
  }
}
