import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUsuariosListComponent } from './settings-usuarios-list/settings-usuarios-list.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsUsuariosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
