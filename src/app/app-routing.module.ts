// Importaciones de angular.
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Impourtaciones de componentes creados.
import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuComponent } from './usuario/lista-usu/lista-usu.component';
import { NofoundComponent } from './nofound/nofound.component';
import { EqiiComponent } from './eqii/eqii.component';
import { ChacaoComponent } from './chacao/chacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

// Constante que almacena las rutas.
const rutasDeComponentes: Routes =[
    { path: '', redirectTo: '/acceso', pathMatch: 'full' },
    //{ path: 'inicio', component: AppComponent },
    { path: 'acceso', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'listadou', component: ListaUsuComponent },
    { path: 'eqii', component: EqiiComponent },
    { path: 'chacao', component: ChacaoComponent },
    { path: '**', component: NofoundComponent }

];


@NgModule({
    imports: [ RouterModule.forRoot(rutasDeComponentes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }