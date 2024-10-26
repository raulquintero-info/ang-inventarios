import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosRoutingModule } from './productos-routing.module';



@NgModule({
  declarations: [
    ProductosListComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
