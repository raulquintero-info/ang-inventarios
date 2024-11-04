import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './web/landing-page/landing-page.component';
import { LoginComponent } from './core/auth/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { CatalogosModule } from './web/backoffice/catalogos/catalogos.module';
import { NotAuthorizedComponent } from './shared/pages/not-authorized/not-authorized.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "auth/login", component: LoginComponent},

  { path: "landing", component: LandingPageComponent},

  {
    path: '',
    loadChildren: ()=>import('../app/web/backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {
    path: '',
    loadChildren: ()=>import('../app/shared/shared.module').then(m => m.SharedModule)
  },

  { path: 'not-authorized', component: NotAuthorizedComponent},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
