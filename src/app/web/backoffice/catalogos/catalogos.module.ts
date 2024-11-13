import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { FormsModule } from '@angular/forms';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { ComponentsModule } from '../../components/components.module';
import { UnidadesMedidaListComponent } from './unidadesmedida/unidades-medida-list/unidades-medida-list.component';
import { ProveedoresListComponent } from './proveedores/proveedores-list/proveedores-list.component';
import { AlmacenesListComponent } from './almacenes/almacenes-list/almacenes-list.component';
import { AtributosListComponent } from './atributos/atributos-list/atributos-list.component';
import { TiposProductoListComponent } from './tipos-producto/tipos-producto-list/tipos-producto-list.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { GruposProductoComponent } from './grupos-producto/grupos-producto.component';
import { MproductosModule } from '../../components/mproductos/mproductos.module';



@NgModule({
  declarations: [
    MarcasListComponent,
    UnidadesMedidaListComponent,
    ProveedoresListComponent,
    AlmacenesListComponent,
    AtributosListComponent,
    TiposProductoListComponent,
    RolesListComponent,
    UsuariosListComponent,
    GruposProductoComponent,
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ComponentsModule,
    FormsModule,
    MproductosModule
  ]
})
export class CatalogosModule { }
