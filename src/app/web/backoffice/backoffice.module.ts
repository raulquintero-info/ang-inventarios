import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { RouterModule } from '@angular/router';
import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { ProductosModule } from './opt/productos/productos.module';
import { MproductosModule } from '../components/mproductos/mproductos.module';



@NgModule({
  declarations: [
    NavbarBackComponent,
    DashboardBackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BackofficeRoutingModule,
    ProductosModule,
    MproductosModule
  ],
  exports:[
    DashboardBackComponent,
    NavbarBackComponent
  ]
})
export class BackofficeModule {  }
