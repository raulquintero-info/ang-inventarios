import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';






const routes: Routes = [
  {
    path: 'entradas',
    children: [

      {path: "ordenes-de-compra", component: OrdenesCompraComponent},

      // {
      //   path: 'recepcion',
      //   loadChildren: ()=>import('./menus/recepcion/recepcion.module').then(m => m.RecepcionModule)
      // },


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }

