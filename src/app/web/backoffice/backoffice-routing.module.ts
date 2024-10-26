import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard } from 'src/app/core/guards/admin.guard';


import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';
import { normalGuard } from 'src/app/core/guards/normal.guard';
// import { ProfileComponent } from 'src/app/shared/pages/profile/profile.component';
// import { ViewerPdfComponent } from 'src/app/shared/pages/viewer-pdf/viewer-pdf.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';


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

