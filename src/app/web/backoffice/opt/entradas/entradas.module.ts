import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';
import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradasProveedoresComponent } from './entradas-proveedores-list/entradas-proveedores.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrdenesCompraComponent,
    EntradasProveedoresComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntradasRoutingModule
  ]
})
export class EntradasModule { }
