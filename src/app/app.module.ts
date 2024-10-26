import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackofficeModule } from './web/backoffice/backoffice.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './web/landing-page/landing-page.component';
import { AuthModule } from './core/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptorProviders } from './core/interceptors/auth.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    AuthModule,
    SharedModule,
    BackofficeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
