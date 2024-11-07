import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
  styleUrls: ['./almacenes-list.component.css']
})
export class AlmacenesListComponent  extends BaseComponent implements OnInit {

  message: string = 'Procesando '
  title                   = 'proveedor';
  elements: Almacen []      = [];
  element: Almacen          = {nombreAlmacen: '' } as Almacen;
  spinnerTable: boolean   = false

  private elementService  = inject(AlmacenesService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idAlmacen:[ 0, [Validators.required]],
    nombreAlmacen:  [ '', [Validators.required]],
    direccionAlmacen:  [ '', [Validators.required]],
    telefonoAlmacen:  [ '', [Validators.required]],
    responsableAlmacen:  [ '', [Validators.required]],
  })

  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this,'Desea borrar este ' + this.title,id); }
  updateElements(temp: any){ this.getAll() }
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  onEdit(element: Almacen){
    this.elementForm.get('idAlmacen')?.setValue(element.idAlmacen);
    this.elementForm.get('nombreAlmacen')?.setValue(element.nombreAlmacen);
    this.elementForm.get('direccionAlmacen')?.setValue(element.direccionAlmacen);
    this.elementForm.get('telefonoAlmacen')?.setValue(element.telefonoAlmacen);
    this.elementForm.get('responsableAlmacen')?.setValue(element.responsableAlmacen);
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
