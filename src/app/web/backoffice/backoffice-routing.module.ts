import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';



const routes: Routes = [
  {
    path: '',
    children: [

      {path: "dashboard", component: DashboardBackComponent},
      {
        path: 'entradas',
        loadChildren: ()=>import('./opt/entradas/entradas.module').then(m => m.EntradasModule)
      },
      {
        path: 'almacenes',
        loadChildren: ()=>import('./opt/almacenes/almacenes.module').then(m => m.AlmacenesModule)
      },


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

