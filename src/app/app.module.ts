import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importaciones de componentes creados.
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NofoundComponent } from './nofound/nofound.component';
import { EqiiComponent } from './eqii/eqii.component';
import { ChacaoComponent } from './chacao/chacao.component';

// Importacion del modulo para trabajar con formularios en angular.
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    InicioComponent,
    NofoundComponent,
    EqiiComponent,
    ChacaoComponent
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
