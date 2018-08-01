import { Component, OnInit } from '@angular/core';

// Importaciones del desarrollador.
import { UsuarioModelo } from '../modelos/usuariomodelo/usuario.modelo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Variable disponible en el 'html' de este componente.
  private objUsuModelo: UsuarioModelo;

  constructor() {

    // Se crea la instancia de la clase modelo.
    this.objUsuModelo = new UsuarioModelo();
  }

  ngOnInit() {
  }


  public valida(): boolean{

    console.log("Usuario: "+ this.objUsuModelo.usuario + " / " + "Clave: "+ this.objUsuModelo.clave);

    if( this.objUsuModelo.usuario == "yesid" && this.objUsuModelo.clave == "123" ){
      console.log("Estás validado!");
      return true;
    }else{
      console.log("No pasaste la validación!");
      return false;
    }

    //return false;
  }

  public llamaAlHome(): void{
    if(this.valida() ){
      console.log("Redirecciona al home...");
    }else{
      console.log("Redirecciona al login...");
    }
  }

}
