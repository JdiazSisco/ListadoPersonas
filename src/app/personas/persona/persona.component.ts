import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.Service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
  constructor(private personasService: PersonasService) {}
  //Otro mensaje
  ngOnInit(): void {}

  emitirSaludo() {
    this.personasService.saludar.emit(this.indice);
  }
}
