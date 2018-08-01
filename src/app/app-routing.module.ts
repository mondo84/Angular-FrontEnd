// Importaciones de angular.
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Impourtaciones de componentes creados.
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { NofoundComponent } from './nofound/nofound.component';
import { EqiiComponent } from './eqii/eqii.component';
import { ChacaoComponent } from './chacao/chacao.component';

// Constante que almacena las rutas.
const rutasDeComponentes: Routes =[
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'eqii', component: EqiiComponent },
    { path: 'chacao', component: ChacaoComponent },
    { path: '**', component: NofoundComponent }

];


@NgModule({
    imports: [ RouterModule.forRoot(rutasDeComponentes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }