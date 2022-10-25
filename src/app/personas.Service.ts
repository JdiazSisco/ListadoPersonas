import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService,
    private dataService: DataServices) {}

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeConsola(
      'Se esta agregando la persona ' + persona.nombre
    );
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);

  }
  encontrarPersona(indice: number) {
    let persona: Persona = this.personas[indice];
    return persona;
  }

  editarPersona(persona: Persona, indice: number) {
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1);
  }
}
