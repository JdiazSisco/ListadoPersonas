import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.Service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;
  modoEdicion:number;
  //@ViewChild('nombreInput') nombre: ElementRef;
  //@ViewChild('apellidoInput') apellido: ElementRef;

  constructor(
    private logginService: LogginService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion  = this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
    //if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //Aqui preguntamos si la variable index existe o se le asigno algo
    this.modoEdicion  = this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
    //if (this.index) {
      this.personasService.editarPersona(persona1,this.index);
    } else {
      this.personasService.agregarPersona(persona1);
    }

    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
