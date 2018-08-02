import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importaciones del desarrollador.
import { UsuarioModelo } from './../modelos/usuariomodelo/usuario.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private objUsuModelo: UsuarioModelo;

  constructor(private objRuta: Router) {
    this.objUsuModelo = new UsuarioModelo();
  }

  ngOnInit() {
  }

  public llamaAlHome():void{
    if( this.validaDatos() ){
      this.objRuta.navigate(['/principal']);
    }else{
      this.objRuta.navigate(['/']);
    }
  }

  private validaDatos(): boolean{
    if(this.objUsuModelo.usuario == "yesid" && this.objUsuModelo.clave == "123"){
      return true;
    }else{
      return false;
    }
     
  }

}
