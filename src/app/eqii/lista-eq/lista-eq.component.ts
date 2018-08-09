import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-eq',
  templateUrl: './lista-eq.component.html',
  styleUrls: ['./lista-eq.component.css']
})
export class ListaEqComponent implements OnInit {

  // Contendrá los datos estraídos del servicio.
  datoExtraido: any = [
    {id:1, codigo: '123', marca: 'HP', modelo: 'Proliant DL380', rack: 'BL-20', u_rack: '22'},
    {id:2, codigo: '456', marca: 'IBM', modelo: '3495', rack: 'BL-21', u_rack: '23'},
    {id:3, codigo: '789', marca: 'SUN', modelo: '8500', rack: 'BL-22', u_rack: '24'}
  ]

  // Contendrá los datos enviados desde el formulario de modificacion.
  datos:any = {
    id: '',
    codigo: '',
    marca: '',
    modelo: '',
    rack: '',
    u_rack: ''
  }

  constructor() { 

  }

  ngOnInit() {
  }

  public editar(dato): void{
     
    console.log("editar y llenar la ventana modal");
    this.datos = dato;
  }

  public agregarItemEditado(): void{
    console.log("edita este id: "+ this.datos.id);
  }

}
