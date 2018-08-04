// Importaciones de angular.
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
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
import { componentNeedsResolution } from '../../node_modules/@angular/core/src/metadata/resource_loading';
import { ConditionalExpr } from '../../node_modules/@angular/compiler';
import { CrearUsuComponent } from './usuario/crear-usu/crear-usu.component';
import { PerfilUsuComponent } from './usuario/perfil-usu/perfil-usu.component';
import { DashboardComponent } from './usuario/dashboard/dashboard.component';

// Constante que almacena las rutas.
const rutasDeComponentes: Routes =[
    { path: '', redirectTo: '/acceso', pathMatch: 'full' },
    //{ path: 'inicio', component: AppComponent },
    { path: 'acceso', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },

    // Ruta 'usuario' con rutas hijas (usuario/listado, usuario/crear, usuario/perfil)
    { path: 'usuario', component: UsuarioComponent, 
        children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: DashboardComponent,  },
                    { path: 'listadou', component: ListaUsuComponent },
                    { path: 'crear', component: CrearUsuComponent },
                    { path: 'perfil', component: PerfilUsuComponent },
                    { path: '**', component: NofoundComponent }
                  ] },

    //{ path: 'listadou', component: ListaUsuComponent },
    { path: 'eqii', component: EqiiComponent },
    { path: 'chacao', component: ChacaoComponent },
    { path: '**', component: NofoundComponent }

];


@NgModule({
    imports: [ RouterModule.forRoot(rutasDeComponentes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

// crear rutas hijas, para navegar dentro de un componente 
// 26.- Curso de Angular 4 con Laravel 5. Crear Panel Admin. jesus Conde   Children