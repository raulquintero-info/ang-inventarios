import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent  extends BaseComponent implements OnInit {

  message: string = 'Procesando '
  title                   = 'proveedor';
  elements: Proveedor []      = [];
  element: Proveedor          = {nombreProveedor: '' } as Proveedor;
  spinnerTable: boolean   = false

  private elementService  = inject(ProveedoresService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idProveedor:[ 0, [Validators.required]],
    nombreProveedor:  [ '', [Validators.required]],
    direccionProveedor:  [ '', [Validators.required]],
    responsableProveedor:  [ '', [Validators.required]],
    telefonoProveedor:  [ '', [Validators.required]],
    emailProveedor:  [ '', [Validators.required]],
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

  onEdit(element: Proveedor){
    this.elementForm.get('idProveedor')?.setValue(element.idProveedor);
    this.elementForm.get('nombreProveedor')?.setValue(element.nombreProveedor);
    this.elementForm.get('direccionProveedor')?.setValue(element.direccionProveedor);
    this.elementForm.get('responsableProveedor')?.setValue(element.responsableProveedor);
    this.elementForm.get('telefonoProveedor')?.setValue(element.telefonoProveedor);
    this.elementForm.get('emailProveedor')?.setValue(element.emailProveedor);
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
