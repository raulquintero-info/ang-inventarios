import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BackofficeModule } from '../web/backoffice/backoffice.module';
import { ExpiredSessionComponent } from './pages/expired-session/expired-session.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ExpiredSessionComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BackofficeModule,
  ],
  exports:[
    HeaderComponent,
    ExpiredSessionComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
