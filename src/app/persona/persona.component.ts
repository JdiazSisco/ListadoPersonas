import { Component, Input, OnInit } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [LogginService]
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
  constructor() {}
//Otro mensaje
  ngOnInit(): void {}
}
