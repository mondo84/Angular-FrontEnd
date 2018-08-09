// Importaciones de angular.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Importacion del modulo para trabajar con formularios en angular.
import { FormsModule } from '@angular/forms';


// Importaciones de componentes creados.
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { NofoundComponent } from './nofound/nofound.component';
import { EqiiComponent } from './eqii/eqii.component';
import { ChacaoComponent } from './chacao/chacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaUsuComponent } from './usuario/lista-usu/lista-usu.component';
import { CrearUsuComponent } from './usuario/crear-usu/crear-usu.component';
import { PerfilUsuComponent } from './usuario/perfil-usu/perfil-usu.component';
import { DashboardComponent } from './usuario/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './principal/contenido/contenido.component';
import { DashboardEqComponent } from './eqii/dashboard-eq/dashboard-eq.component';
import { ListaEqComponent } from './eqii/lista-eq/lista-eq.component';
import { ListaChaComponent } from './chacao/lista-cha/lista-cha.component';
import { DashboardChaComponent } from './chacao/dashboard-cha/dashboard-cha.component'

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
    PerfilUsuComponent,
    DashboardComponent,
    FooterComponent,
    ContenidoComponent,
    DashboardEqComponent,
    ListaEqComponent,
    ListaChaComponent,
    DashboardChaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule // Importacion del modulo para trabajar con formularios en angular.
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente de arranque. Contiene el menu. Encabezado y footer.
})
export class AppModule { }
