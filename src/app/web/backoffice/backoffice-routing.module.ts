import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';



const routes: Routes = [
  {
    path: '',
    children: [

      {path: "dashboard", component: DashboardBackComponent},

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
export class BackofficeRoutingModule { }

