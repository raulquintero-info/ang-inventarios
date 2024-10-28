import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule } from '@angular/forms';
import { MproductosModule } from "../../../components/mproductos/mproductos.module";
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    ProductosListComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    MproductosModule,
    NgxSpinnerModule,
]
})
export class ProductosModule { }
