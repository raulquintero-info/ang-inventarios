import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenesListComponent } from './almacenes-list/almacenes-list.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {path: "", component: AlmacenesListComponent},
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
export class AlmacenesRoutingModule { }

