import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importaciones de componentes creados.
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { NofoundComponent } from './nofound/nofound.component';
import { EqiiComponent } from './eqii/eqii.component';
import { ChacaoComponent } from './chacao/chacao.component';

// Importacion del modulo para trabajar con formularios en angular.
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaUsuComponent } from './usuario/lista-usu/lista-usu.component';
import { CrearUsuComponent } from './usuario/crear-usu/crear-usu.component';
import { PerfilUsuComponent } from './usuario/perfil-usu/perfil-usu.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NofoundComponent,
    EqiiComponent,
    ChacaoComponent,
    PrincipalComponent,
    LoginComponent,
    MenuComponent,
    PerfilComponent,
    ListaUsuComponent,
    CrearUsuComponent,
    PerfilUsuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente de arranque. Contiene el menu. Encabezado y footer.
})
export class AppModule { }
