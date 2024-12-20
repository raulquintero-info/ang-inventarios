import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { UnidadesMedidaListComponent } from './unidadesmedida/unidades-medida-list/unidades-medida-list.component';
import { ProveedoresListComponent } from './proveedores/proveedores-list/proveedores-list.component';
import { AlmacenesListComponent } from './almacenes/almacenes-list/almacenes-list.component';
import { AtributosListComponent } from './atributos/atributos-list/atributos-list.component';
import { TiposProductoListComponent } from './tipos-producto/tipos-producto-list/tipos-producto-list.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { GruposProductosListComponent } from './grupos-producto/grupos-productos-list/grupos-productos-list.component';
import { GruposProductosContentComponent } from './grupos-producto/grupos-productos-content/grupos-productos-content.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'marcas', component: MarcasListComponent},
      {path: 'unidades-medida', component: UnidadesMedidaListComponent},
      {path: 'proveedores', component: ProveedoresListComponent},
      {path: 'almacenes', component: AlmacenesListComponent},
      {path: 'atributos', component: AtributosListComponent},
      {path: 'tipos-producto', component: TiposProductoListComponent},
      {path: 'productos-grupos', component: GruposProductosListComponent},
      {path: 'productos-grupos-content', component: GruposProductosContentComponent},
      {path: 'roles', component: RolesListComponent},
      {path: 'usuarios', component: UsuariosListComponent, canActivate: [ adminGuard ] },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }

