import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard } from 'src/app/core/guards/admin.guard';
import { normalGuard } from 'src/app/core/guards/normal.guard';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ExpiredSessionComponent } from './pages/expired-session/expired-session.component';

// import { TallerServiciosListComponent } from './menus/taller/services/taller-servicios-list/taller-servicios-list.component';
// import { TallerVehicleListComponent } from './menus/taller/vehicles/taller-vehicle-list/taller-vehicle-list.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
// import { ProfileComponent } from 'src/app/shared/pages/profile/profile.component';
// import { ViewerPdfComponent } from 'src/app/shared/pages/viewer-pdf/viewer-pdf.component';
// import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'expired-session', component: ExpiredSessionComponent},
      // { path: 'not-found', component: NotFoundComponent },
      // { path: 'perfil', component: ProfileComponent, canActivate: [adminGuard] },


      // {path: 'pdf-viewer/:pdfFile', component: ViewerPdfComponent, canActivate: [adminGuard]},

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

