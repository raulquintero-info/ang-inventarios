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
      {
        path: 'settings',
        loadChildren: ()=>import('./opt/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'catalogos',
        loadChildren: ()=>import('./catalogos/catalogos.module').then(m => m.CatalogosModule)
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

