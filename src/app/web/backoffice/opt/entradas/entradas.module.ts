import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';
import { EntradasRoutingModule } from './entradas-routing.module';
import { FormsModule } from '@angular/forms';
import { OrdenNuevaComponent } from './orden-nueva/orden-nueva.component';



@NgModule({
  declarations: [
    OrdenesCompraComponent,
    OrdenNuevaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntradasRoutingModule
  ]
})
export class EntradasModule { }
