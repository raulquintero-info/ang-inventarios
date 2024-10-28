import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './filetree/file-list/file-list.component';
import { TreeDirectoryComponent } from './filetree/tree-directory/tree-directory.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';



@NgModule({
  declarations: [
    TreeDirectoryComponent,
    FileListComponent,
    ProductosFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TreeDirectoryComponent,
    FileListComponent,

  ]
})
export class MproductosModule { }
