import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Comercio/add/add.component';
import { EditComponent } from './Comercio/edit/edit.component';
import { ListarComponent } from './Comercio/listar/listar.component';
import { ListarPaquetesComponent } from './Paquetes/listar/listar.component'

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent },
  {path: 'edit', component:EditComponent},
  {path: 'listarPaquetes', component:ListarPaquetesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
