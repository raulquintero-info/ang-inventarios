import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GrupoProducto } from 'src/app/core/interfaces/grupo-producto.interface';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { GrupoProductosService } from 'src/app/core/services/grupo-productos.service';

@Component({
  selector: 'app-grupos-producto',
  templateUrl: './grupos-producto.component.html',
  styleUrls: ['./grupos-producto.component.css']
})
export class GruposProductoComponent extends BaseComponent implements OnInit {

  message: string = 'Procesando '
  title                   = 'Grupo de Productos';
  elements: GrupoProducto []      = [];
  element: GrupoProducto          = {nombreGrupoProducto: '' } as GrupoProducto;
  spinnerTable: boolean   = false

  private elementService  = inject(GrupoProductosService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idGrupoProducto:[ 0, [Validators.required]],
    nombreGrupoProducto:  [ '', [Validators.required]],
    // direccionAlmacen:  [ '', [Validators.required]],
    // telefonoAlmacen:  [ '', [Validators.required]],
    // responsableAlmacen:  [ '', [Validators.required]],
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
    this.elementForm.get('idGrupoProducto')?.setValue(element.idGrupoProducto);
    this.elementForm.get('nombreGrupoProducto')?.setValue(element.nombreGrupoProducto);
    // this.elementForm.get('direccionAlmacen')?.setValue(element.direccionAlmacen);
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
