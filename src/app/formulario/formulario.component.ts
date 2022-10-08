import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  //  nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor(private logginService :LogginService){}

  agregarPersona() {
    let persona1 = new Persona(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    );

    this.logginService.enviaMensajeConsola("Persona" + persona1.nombre );
    this.logginService.enviaMensajeConsola(persona1.apellido);
    this.personaCreada.emit(persona1);
  }
}
