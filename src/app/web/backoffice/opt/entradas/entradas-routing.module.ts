import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';
import { OrdenNuevaComponent } from './orden-nueva/orden-nueva.component';






const routes: Routes = [
  {
    path: '',
    children: [
      {path: "ordenes-de-compra", component: OrdenesCompraComponent},
      {path: "orden-nueva", component: OrdenNuevaComponent},
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

