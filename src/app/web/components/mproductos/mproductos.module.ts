import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './filetree/file-list/file-list.component';
import { TreeDirectoryComponent } from './filetree/tree-directory/tree-directory.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductosGrupoFormComponent } from './productos-grupo/productos-grupo-form/productos-grupo-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TreeDirectoryComponent,
    FileListComponent,
    ProductosFormComponent,
    ProductosGrupoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule,

  ],
  exports:[
    TreeDirectoryComponent,
    FileListComponent,
    ProductosGrupoFormComponent,

  ]
})
export class MproductosModule { }
