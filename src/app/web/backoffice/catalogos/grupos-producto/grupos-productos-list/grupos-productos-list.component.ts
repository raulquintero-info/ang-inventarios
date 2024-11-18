import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GrupoProducto } from 'src/app/core/interfaces/grupo-producto.interface';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { GrupoProductosService } from 'src/app/core/services/grupo-productos.service';

@Component({
  selector: 'app-grupos-productos-list',
  templateUrl: './grupos-productos-list.component.html',
  styleUrls: ['./grupos-productos-list.component.css']
})
export class GruposProductosListComponent extends BaseComponent implements OnInit {

  message: string = 'Procesando '
  title                   = 'Grupo de Productos';
  elements: GrupoProducto []      = [];
  element: GrupoProducto          = {nombreGrupo: '' } as GrupoProducto;
  spinnerTable: boolean   = false

  private elementService  = inject(GrupoProductosService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idGrupo:[ 0, [Validators.required]],
    nombreGrupo:  [ '', [Validators.required]],
    status:  [ false, [Validators.required]],
  })

  constructor(){ super();
    this.sizeMaximized = '400px';
  }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this,'Desea borrar este ' + this.title,id); }
  updateElements(temp: any){ this.getAll() }
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  onEdit(element: GrupoProducto){
    this.elementForm.get('idGrupo')?.setValue(element.idGrupo);
    this.elementForm.get('nombreGrupo')?.setValue(element.nombreGrupo);
    this.elementForm.get('status')?.setValue(element.status);
    console.log('edit', this.elementForm)
    // this.elementForm.get('telefonoAlmacen')?.setValue(element.telefonoAlmacen);
    // this.elementForm.get('responsableAlmacen')?.setValue(element.responsableAlmacen);
  }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{
        this.elements = resp;
        this.hideSpinner()
      },
      error: error=>{
        ToastDef.fire({ icon: "error", title: "Error al obtener la lista de registros" });
        this.hideSpinner();
      }
    })
  }



}
