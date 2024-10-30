import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenesListComponent } from './almacenes-list/almacenes-list.component';
import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlmacenesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlmacenesRoutingModule,
  ]
})
export class AlmacenesModule { }
