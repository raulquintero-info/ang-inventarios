import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { UnidadesMedidaListComponent } from './unidadesmedida/unidades-medida-list/unidades-medida-list.component';
import { ProveedoresListComponent } from './proveedores/proveedores-list/proveedores-list.component';
import { AlmacenesListComponent } from './almacenes/almacenes-list/almacenes-list.component';
import { AtributosListComponent } from './atributos/atributos-list/atributos-list.component';
import { TiposProductoListComponent } from './tipos-producto/tipos-producto-list/tipos-producto-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'marcas', component: MarcasListComponent},
      {path: 'unidades-medida', component: UnidadesMedidaListComponent},
      {path: 'proveedores', component: ProveedoresListComponent},
      {path: 'almacenes', component: AlmacenesListComponent},
      {path: 'atributos', component: AtributosListComponent},
      {path: 'tipos-producto', component: TiposProductoListComponent}


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }

