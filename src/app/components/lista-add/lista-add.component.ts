import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item:any = {
    name:''
  }

  constructor(private servicio:ConexionService) { }

  ngOnInit(): void {
  }

  agregar() {
    this.servicio.agregarItem(this.item); //está ocupando la función agregarItem de la clase conexionservice
    this.item.name='';
  }

}
