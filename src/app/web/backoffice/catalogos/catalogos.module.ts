import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { FormsModule } from '@angular/forms';
import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { MarcasFormComponent } from './marcas/marcas-form/marcas-form.component';
import { UnidadesMedidaListComponent } from './unidadesmedida/unidades-medida-list/unidades-medida-list.component';
import { UnidadesMedidaFormComponent } from './unidadesmedida/unidades-medida-form/unidades-medida-form.component';



@NgModule({
  declarations: [
    MarcasListComponent,
    MarcasFormComponent,
    UnidadesMedidaListComponent,
    UnidadesMedidaFormComponent,
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule,
  ]
})
export class CatalogosModule { }
