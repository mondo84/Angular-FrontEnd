import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private parametro: string;

  constructor() { 
    this.parametro = "Listado de usuarios"
  }

  ngOnInit() {
  }

}
