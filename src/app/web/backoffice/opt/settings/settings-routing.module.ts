import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsUsuariosListComponent } from './settings-usuarios-list/settings-usuarios-list.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';






const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'usuarios', component: SettingsUsuariosListComponent, canActivate: [ adminGuard ] },

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
export class SettingsRoutingModule { }

