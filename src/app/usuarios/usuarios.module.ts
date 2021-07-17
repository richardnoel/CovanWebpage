import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ListarComponent } from './pages/listar/listar.component';


@NgModule({
  declarations: [
    EditarComponent,
    NuevoComponent,
    UsuarioComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
