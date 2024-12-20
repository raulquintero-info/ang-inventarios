import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosModule } from '../backoffice/opt/productos/productos.module';
import { MarcasFormComponent } from './marcas/marcas-form/marcas-form.component';
import { UnidadesMedidaFormComponent } from './unudades-medida/unidades-medida-form/unidades-medida-form.component';
import { ProveedorFormComponent } from './proveedores/proveedor-form/proveedor-form.component';
import { AlmacenFormComponent } from './almacenes/almacen-form/almacen-form.component';
import { AtributosFormComponent } from './atributos/atributos-form/atributos-form.component';
import { TipoProductoFormComponent } from './tipos-producto/tipo-producto-form/tipo-producto-form.component';
import { RolesFormComponent } from './roles/roles-form/roles-form.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProveedorModalComponent } from './proveedores/proveedor-modal/proveedor-modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    MarcasFormComponent,
    UnidadesMedidaFormComponent,
    ProveedorFormComponent,
    AlmacenFormComponent,
    AtributosFormComponent,
    TipoProductoFormComponent,
    RolesFormComponent,
    UsuariosFormComponent,
    ProveedorModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductosModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  exports:[
    ProductosModule,
    MarcasFormComponent,
    UnidadesMedidaFormComponent,
    ProveedorFormComponent,
    AlmacenFormComponent,
    AtributosFormComponent,
    TipoProductoFormComponent,
    RolesFormComponent,
    UsuariosFormComponent,

  ]
})
export class ComponentsModule { }
