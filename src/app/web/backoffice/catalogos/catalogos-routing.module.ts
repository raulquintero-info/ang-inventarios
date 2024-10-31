import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { UnidadesMedidaListComponent } from './unidadesmedida/unidades-medida-list/unidades-medida-list.component';






const routes: Routes = [
  {
    path: 'catalogos',
    children: [
      {path: 'marcas', component: MarcasListComponent},
      {path: 'unidades-medida', component: UnidadesMedidaListComponent},


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }

